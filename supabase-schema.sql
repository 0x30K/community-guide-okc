-- ============================================
-- CCSR Community Guide - Supabase Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- Categories table
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Resources table
CREATE TABLE resources (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  name TEXT NOT NULL,
  description TEXT,
  category_id TEXT REFERENCES categories(id) ON DELETE SET NULL,
  category_name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  website TEXT,
  hours TEXT,
  image_url TEXT,
  tags TEXT[] DEFAULT '{}',
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Profiles table (links to auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  email TEXT UNIQUE,
  saved_resources TEXT[] DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for categories and resources
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Category & Resource Policies
CREATE POLICY "Public read access" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON resources FOR SELECT USING (is_active = true);

-- Profile Policies
CREATE POLICY "Profiles are viewable by owner" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Index for faster category filtering
CREATE INDEX idx_resources_category ON resources(category_id);

-- Index for full-text search
CREATE INDEX idx_resources_name ON resources USING gin(to_tsvector('english', name));
CREATE INDEX idx_resources_description ON resources USING gin(to_tsvector('english', description));

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_resources_modtime
  BEFORE UPDATE ON resources
  FOR EACH ROW
  EXECUTE FUNCTION update_modified_column();

-- ============================================
-- Seed Data
-- ============================================

INSERT INTO categories (id, name, icon, slug) VALUES
  ('food', 'Food & Meals', 'restaurant', 'food'),
  ('shelter', 'Shelter & Housing', 'home', 'shelter'),
  ('medical', 'Medical Care', 'medical_services', 'medical'),
  ('mental', 'Mental Health', 'psychology', 'mental'),
  ('crisis', 'Crisis Support', 'warning', 'crisis'),
  ('education', 'Education & Jobs', 'school', 'education'),
  ('legal', 'Legal Aid', 'gavel', 'legal'),
  ('clothing', 'Clothing & Goods', 'checkroom', 'clothing');

INSERT INTO resources (id, name, description, category_id, category_name, address, phone, website, hours, image_url, tags) VALUES
  ('city-rescue-mission', 'The City Rescue Mission', 'Providing emergency shelter, meals, and recovery programs to individuals experiencing homelessness in Oklahoma City since 1957.', 'food', 'Food & Meals', '800 W California Ave, Oklahoma City, OK 73106', '(405) 232-2709', 'https://www.cityrescue.org', 'Meals served daily: Breakfast 6 AM, Lunch 12 PM, Dinner 5 PM', '', ARRAY['Free Meals', 'Emergency Shelter', 'Recovery Programs']),
  ('regional-food-bank', 'Regional Food Bank of Oklahoma', 'The Regional Food Bank leads the fight against hunger in central and western Oklahoma.', 'food', 'Food & Meals', '3355 S Purdue, Oklahoma City, OK 73179', '(405) 972-1111', 'https://www.rfbo.org', 'Mon-Fri 8 AM - 4:30 PM', '', ARRAY['Food Distribution', 'Partner Network', 'Volunteer Opportunities']),
  ('salvation-army-okc', 'The Salvation Army OKC', 'Providing hot meals, a food pantry, and utility assistance to families in need.', 'food', 'Food & Meals', '101 NW 5th St, Oklahoma City, OK 73102', '(405) 246-1100', 'https://www.salvationarmyokcac.org', 'Mon-Fri 9 AM - 3 PM', '', ARRAY['Hot Meals', 'Food Pantry', 'Utility Assistance']),
  ('homeless-alliance', 'Homeless Alliance Day Shelter', 'The WestTown Day Shelter provides daytime services for individuals experiencing homelessness.', 'shelter', 'Shelter & Housing', '1724 NW 4th St, Oklahoma City, OK 73106', '(405) 415-8410', 'https://www.homelessalliance.org', 'Mon-Fri 7 AM - 3 PM', '', ARRAY['Day Shelter', 'Case Management', 'Housing Navigation']),
  ('jesus-house', 'Jesus House OKC', 'Emergency shelter providing beds, meals, and long-term recovery programs.', 'shelter', 'Shelter & Housing', '1335 W Sheridan Ave, Oklahoma City, OK 73106', '(405) 232-7164', 'https://www.jesushouseokc.org', 'Open 24/7 for shelter residents', '', ARRAY['Emergency Shelter', 'Recovery Program', 'Families Welcome']),
  ('variety-care', 'Variety Care', 'Oklahoma''s largest community health center providing medical, dental, and behavioral health services.', 'medical', 'Medical Care', '500 S Maple Ave, Oklahoma City, OK 73108', '(405) 632-6688', 'https://www.varietycare.org', 'Mon-Fri 7:30 AM - 6 PM, Sat 8 AM - 12 PM', '', ARRAY['Sliding Scale', 'Dental', 'Behavioral Health', 'No Insurance Required']),
  ('good-shepherd-clinic', 'Good Shepherd Ministries Free Clinic', 'Free medical clinic providing primary care and prescription assistance to uninsured adults.', 'medical', 'Medical Care', '222 NW 12th St, Oklahoma City, OK 73103', '(405) 232-8631', 'https://www.gsmokc.org', 'Mon & Wed 8 AM - 12 PM, Tue & Thu 1 PM - 4 PM', '', ARRAY['Free Clinic', 'Prescription Assistance', 'Uninsured']),
  ('nami-oklahoma', 'NAMI Oklahoma', 'Free support groups, education programs, and advocacy for individuals and families affected by mental illness.', 'mental', 'Mental Health', '3033 N Walnut Ave, Suite 105E, Oklahoma City, OK 73105', '(405) 230-1900', 'https://www.namioklahoma.org', 'Mon-Fri 9 AM - 5 PM', '', ARRAY['Support Groups', 'Education', 'Family Support', 'Free']),
  ('oklahoma-crisis-line', 'Oklahoma Mental Health Crisis Line', '24/7 crisis intervention hotline providing immediate support for mental health emergencies.', 'mental', 'Mental Health', 'Statewide Service (Phone-based)', '1-800-522-9054', 'https://www.ok.gov/odmhsas', '24/7', '', ARRAY['24/7 Hotline', 'Crisis Intervention', 'Confidential']),
  ('ywca-okc', 'YWCA OKC - Domestic Violence Support', 'Emergency shelter, crisis counseling, legal advocacy for survivors of domestic violence.', 'crisis', 'Crisis Support', '2460 NW 39th St, Oklahoma City, OK 73112', '(405) 943-7906', 'https://www.ywcaokc.org', '24/7 Crisis Hotline', '', ARRAY['Domestic Violence', 'Emergency Shelter', 'Legal Advocacy', 'Confidential']),
  ('211-helpline', '2-1-1 Oklahoma Helpline', 'Dial 2-1-1 to connect with trained specialists for food, shelter, healthcare, and job training.', 'crisis', 'Crisis Support', 'Statewide Service (Phone-based)', '2-1-1', 'https://www.211oklahoma.org', '24/7', '', ARRAY['24/7', 'Multi-Language', 'Referral Service']),
  ('goodwill-okc', 'Goodwill Industries of Central Oklahoma', 'Free job training, resume assistance, career counseling, and placement services.', 'education', 'Education & Jobs', '316 S Blackwelder Ave, Oklahoma City, OK 73108', '(405) 235-1611', 'https://www.okgoodwill.org', 'Mon-Fri 8 AM - 5 PM', '', ARRAY['Job Training', 'GED Prep', 'Career Counseling', 'Free']),
  ('legal-aid-ok', 'Legal Aid Services of Oklahoma', 'Free civil legal help for low-income Oklahomans covering housing, family law, and immigration.', 'legal', 'Legal Aid', '2915 N Classen Blvd #110, Oklahoma City, OK 73106', '(405) 557-0020', 'https://www.legalaidok.org', 'Mon-Fri 8:30 AM - 5 PM', '', ARRAY['Free Legal Help', 'Housing', 'Family Law', 'Immigration']),
  ('st-vincent-de-paul', 'St. Vincent de Paul Society', 'Community assistance including food, clothing, furniture, utility payments, and rent assistance.', 'clothing', 'Clothing & Goods', '9700 N Military Ave, Oklahoma City, OK 73114', '(405) 842-6426', 'https://www.svdpokc.org', 'Mon-Sat 9 AM - 5 PM', '', ARRAY['Clothing', 'Furniture', 'Rent Assistance', 'Utility Help']);
