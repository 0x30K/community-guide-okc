import { Category, Resource } from "./types";

export const categories: Category[] = [
  { id: "food", name: "Food & Meals", icon: "restaurant", slug: "food" },
  { id: "shelter", name: "Shelter & Housing", icon: "home", slug: "shelter" },
  { id: "medical", name: "Medical Care", icon: "medical_services", slug: "medical" },
  { id: "church", name: "Church", icon: "church", slug: "church" },
  { id: "mental", name: "Mental Health", icon: "psychology", slug: "mental" },
  { id: "crisis", name: "Crisis Support", icon: "warning", slug: "crisis" },
  { id: "education", name: "Education & Jobs", icon: "school", slug: "education" },
  { id: "legal", name: "Legal Aid", icon: "gavel", slug: "legal" },
  { id: "clothing", name: "Clothing & Goods", icon: "checkroom", slug: "clothing" },
];

export const resources: Resource[] = [
  // ── Food & Meals ─────────────────────────────────────
  {
    id: "city-rescue-mission",
    name: "The City Rescue Mission",
    description: "Providing emergency shelter, meals, and recovery programs to individuals experiencing homelessness in Oklahoma City since 1957. Offers three meals daily, chapel services, and long-term recovery programs for men.",
    category_id: "food",
    category_name: "Food & Meals",
    address: "800 W California Ave, Oklahoma City, OK 73106",
    phone: "(405) 232-2709",
    website: "https://www.cityrescue.org",
    hours: "Meals served daily: Breakfast 6 AM, Lunch 12 PM, Dinner 5 PM",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMEXNWmSTPOQLGrATrePsxCyKb124WaSNlQLO96HZL07NLBqi3Fls_0HAbafrVim-wB1_xfkGoNprjlMMwaE25bFIqavZcShUw46nIIfwwCxX-n_SA9KWDdxjbBBki1aWgQJKbrwZMiQcYL2pwGXyyNd9W2b30LICBv18GNQ5_uvZO5meYc_Z0sLGvU0Bu0cmXRQPeKNsZPzut_1zq5jfoZpHN0rAVRVc5SkcMT05qrg99AzarlNEXDaADR8cN4us5QASh1cR5PuQ",
    tags: ["Free Meals", "Emergency Shelter", "Recovery Programs"],
  },
  {
    id: "regional-food-bank",
    name: "Regional Food Bank of Oklahoma",
    description: "The Regional Food Bank leads the fight against hunger in central and western Oklahoma by providing food and resources to 1,300 partner agencies across 53 counties. Distributes over 60 million meals annually.",
    category_id: "food",
    category_name: "Food & Meals",
    address: "3355 S Purdue, Oklahoma City, OK 73179",
    phone: "(405) 972-1111",
    website: "https://www.rfbo.org",
    hours: "Mon-Fri 8 AM - 4:30 PM",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7WhgGZqeYAvroMCmxJrnk1FypyiMpSovnK6N4ljGUU2nAr4QLS9TC7_zZjPv-TSsOE0ICIEiYKT-7S3lYZe65kPxkpo2wvt6IJ_LfJPqeoEqY7QpkTzFIFkbYjWjSf60IEQHrph_5o0zzFQ3bB98NvGP2r9OjMBF7o-S1zs_9Z6nKc4VXq-ovwW7bMuvDvemNjUxrT4-7cXuU9JRxQYIDI0D1GDY21u-VVGPU1mbpc2NhQE18r6VIzbBGUZtIcXL1N-z7i1hmvDY",
    tags: ["Food Distribution", "Partner Network", "Volunteer Opportunities"],
  },
  {
    id: "salvation-army-okc",
    name: "The Salvation Army OKC",
    description: "Providing hot meals, a food pantry, and utility assistance to families in need. The Salvation Army also offers seasonal programs including back-to-school drives and holiday meal distributions.",
    category_id: "food",
    category_name: "Food & Meals",
    address: "101 NW 5th St, Oklahoma City, OK 73102",
    phone: "(405) 246-1100",
    website: "https://www.salvationarmyokcac.org",
    hours: "Mon-Fri 9 AM - 3 PM",
    image_url: "",
    tags: ["Hot Meals", "Food Pantry", "Utility Assistance"],
  },

  // ── Shelter & Housing ────────────────────────────────
  {
    id: "homeless-alliance",
    name: "Homeless Alliance Day Shelter",
    description: "The WestTown Day Shelter provides daytime services for individuals experiencing homelessness including showers, laundry, mail, phone access, case management, and housing navigation. A crucial first step for those seeking stability.",
    category_id: "shelter",
    category_name: "Shelter & Housing",
    address: "1724 NW 4th St, Oklahoma City, OK 73106",
    phone: "(405) 415-8410",
    website: "https://www.homelessalliance.org",
    hours: "Mon-Fri 7 AM - 3 PM",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2CJ_5N70OJaYD-JFdfO19SV6shjQ-xR6r5HhfhPPDKJ1ppdMZF_88M2RcfKHB_NKUh6YQp9ujg38zH1W68ecbuoCspv-G9TQooC4D8ujBiCY-dxAkghOBCYTR4qSqeS0ULXe-o_WmNMrrujQPC3HIq7mXAXmWrSFgoeEpMH6lhWZdTBpaEDBh3tYlWQArOWHSRNfk-94dGwhPmQ94IwC2XUTKWkHTLgro8Pen34_Z9chOLEvL1ME-6TCsfG9krFAu6kaA6KEdkTY",
    tags: ["Day Shelter", "Case Management", "Housing Navigation"],
  },
  {
    id: "jesus-house",
    name: "Jesus House OKC",
    description: "Emergency shelter providing beds, meals, and long-term recovery programs for men, women, and families. Offers a 12-month life-change program with job training, counseling, and spiritual development.",
    category_id: "shelter",
    category_name: "Shelter & Housing",
    address: "1335 W Sheridan Ave, Oklahoma City, OK 73106",
    phone: "(405) 232-7164",
    website: "https://www.jesushouseokc.org",
    hours: "Open 24/7 for shelter residents",
    image_url: "",
    tags: ["Emergency Shelter", "Recovery Program", "Families Welcome"],
  },
  {
    id: "city-rescue-shelter",
    name: "City Rescue Mission - Men's Shelter",
    description: "Nightly emergency shelter for men with up to 250 beds. Includes access to hot meals, showers, and connections to long-term recovery programs. Walk-ins accepted nightly starting at 5 PM.",
    category_id: "shelter",
    category_name: "Shelter & Housing",
    address: "800 W California Ave, Oklahoma City, OK 73106",
    phone: "(405) 232-2709",
    website: "https://www.cityrescue.org",
    hours: "Check-in starts at 5 PM nightly",
    image_url: "",
    tags: ["Emergency Shelter", "Walk-in", "Men Only"],
  },

  // ── Medical Care ─────────────────────────────────────
  {
    id: "variety-care",
    name: "Variety Care",
    description: "Oklahoma's largest community health center providing comprehensive medical, dental, and behavioral health services on a sliding-fee scale. Serves patients regardless of ability to pay or insurance status.",
    category_id: "medical",
    category_name: "Medical Care",
    address: "500 S Maple Ave, Oklahoma City, OK 73108",
    phone: "(405) 632-6688",
    website: "https://www.varietycare.org",
    hours: "Mon-Fri 7:30 AM - 6 PM, Sat 8 AM - 12 PM",
    image_url: "",
    tags: ["Sliding Scale", "Dental", "Behavioral Health", "No Insurance Required"],
  },
  {
    id: "good-shepherd-clinic",
    name: "Good Shepherd Ministries Free Clinic",
    description: "Free medical clinic providing primary care, prescription assistance, and health screenings to uninsured adults in Oklahoma City. Volunteer doctors and nurses provide compassionate care at no cost.",
    category_id: "medical",
    category_name: "Medical Care",
    address: "222 NW 12th St, Oklahoma City, OK 73103",
    phone: "(405) 232-8631",
    website: "https://www.gsmokc.org",
    hours: "Mon & Wed 8 AM - 12 PM, Tue & Thu 1 PM - 4 PM",
    image_url: "",
    tags: ["Free Clinic", "Prescription Assistance", "Uninsured"],
  },

  // ── Church ──────────────────────────────────────────
  {
    id: "st-lukes-okc",
    name: "St. Luke's Methodist Church",
    description: "A historic community pillar in downtown OKC, offering uplifting worship services, community outreach programs, and support for families in need. Known for their beautiful architecture and commitment to local missions.",
    category_id: "church",
    category_name: "Church",
    address: "222 NW 15th St, Oklahoma City, OK 73103",
    phone: "(405) 232-1371",
    website: "https://stlukesokc.org",
    hours: "Sunday Worship: 8:15 AM, 10:50 AM",
    image_url: "",
    tags: ["Worship", "Community Outreach", "Downtown"],
  },
  {
    id: "fifth-street-baptist",
    name: "Fifth Street Baptist Church",
    description: "Deeply rooted in the community, providing spiritual guidance and essential services including a food pantry and clothes closet to those in the NE Oklahoma City area.",
    category_id: "church",
    category_name: "Church",
    address: "801 NE 5th St, Oklahoma City, OK 73104",
    phone: "(405) 235-1324",
    website: "http://www.fifthstreetbaptist.org",
    hours: "Sunday School: 9 AM, Worship: 10:45 AM",
    image_url: "",
    tags: ["Food Pantry", "Clothing", "Community Support"],
  },

  // ── Mental Health ────────────────────────────────────
  {
    id: "nami-oklahoma",
    name: "NAMI Oklahoma",
    description: "The National Alliance on Mental Illness Oklahoma chapter offers free support groups, education programs, and advocacy for individuals and families affected by mental illness across the state.",
    category_id: "mental",
    category_name: "Mental Health",
    address: "3033 N Walnut Ave, Suite 105E, Oklahoma City, OK 73105",
    phone: "(405) 230-1900",
    website: "https://www.namioklahoma.org",
    hours: "Mon-Fri 9 AM - 5 PM",
    image_url: "",
    tags: ["Support Groups", "Education", "Family Support", "Free"],
  },
  {
    id: "oklahoma-crisis-line",
    name: "Oklahoma Mental Health Crisis Line",
    description: "24/7 crisis intervention hotline providing immediate support for mental health emergencies, suicidal thoughts, and substance abuse crises. Free, confidential, and available in multiple languages.",
    category_id: "mental",
    category_name: "Mental Health",
    address: "Statewide Service (Phone-based)",
    phone: "1-800-522-9054",
    website: "https://www.ok.gov/odmhsas",
    hours: "24/7",
    image_url: "",
    tags: ["24/7 Hotline", "Crisis Intervention", "Confidential"],
  },

  // ── Crisis Support ───────────────────────────────────
  {
    id: "ywca-okc",
    name: "YWCA OKC - Domestic Violence Support",
    description: "Providing emergency shelter, crisis counseling, legal advocacy, and transitional housing for survivors of domestic violence and sexual assault. All services are free and confidential.",
    category_id: "crisis",
    category_name: "Crisis Support",
    address: "2460 NW 39th St, Oklahoma City, OK 73112",
    phone: "(405) 943-7906",
    website: "https://www.ywcaokc.org",
    hours: "24/7 Crisis Hotline",
    image_url: "",
    tags: ["Domestic Violence", "Emergency Shelter", "Legal Advocacy", "Confidential"],
  },
  {
    id: "211-helpline",
    name: "2-1-1 Oklahoma Helpline",
    description: "Dial 2-1-1 to connect with trained specialists who can help you find food, shelter, healthcare, job training, and other essential services in your area. Available 24/7 in multiple languages.",
    category_id: "crisis",
    category_name: "Crisis Support",
    address: "Statewide Service (Phone-based)",
    phone: "2-1-1",
    website: "https://www.211oklahoma.org",
    hours: "24/7",
    image_url: "",
    tags: ["24/7", "Multi-Language", "Referral Service"],
  },

  // ── Education & Jobs ─────────────────────────────────
  {
    id: "goodwill-okc",
    name: "Goodwill Industries of Central Oklahoma",
    description: "Offers free job training, resume assistance, career counseling, and placement services. Programs include digital literacy, GED preparation, and industry-specific certifications to help individuals gain meaningful employment.",
    category_id: "education",
    category_name: "Education & Jobs",
    address: "316 S Blackwelder Ave, Oklahoma City, OK 73108",
    phone: "(405) 235-1611",
    website: "https://www.okgoodwill.org",
    hours: "Mon-Fri 8 AM - 5 PM",
    image_url: "",
    tags: ["Job Training", "GED Prep", "Career Counseling", "Free"],
  },
  {
    id: "oklahoma-works",
    name: "Oklahoma Works - Workforce Centers",
    description: "State-run workforce centers offering free job search assistance, skills assessments, training referrals, unemployment insurance support, and workshops. Multiple locations across the metro area.",
    category_id: "education",
    category_name: "Education & Jobs",
    address: "7401 NE 23rd St, Oklahoma City, OK 73141",
    phone: "(405) 713-1890",
    website: "https://www.oklahomaworks.gov",
    hours: "Mon-Fri 8 AM - 4:30 PM",
    image_url: "",
    tags: ["Job Search", "Training", "Unemployment", "Free"],
  },

  // ── Legal Aid ────────────────────────────────────────
  {
    id: "legal-aid-ok",
    name: "Legal Aid Services of Oklahoma",
    description: "Free civil legal help for low-income Oklahomans covering housing disputes, family law, consumer protection, public benefits, and immigration. Income qualifications apply.",
    category_id: "legal",
    category_name: "Legal Aid",
    address: "2915 N Classen Blvd #110, Oklahoma City, OK 73106",
    phone: "(405) 557-0020",
    website: "https://www.legalaidok.org",
    hours: "Mon-Fri 8:30 AM - 5 PM",
    image_url: "",
    tags: ["Free Legal Help", "Housing", "Family Law", "Immigration"],
  },

  // ── Clothing & Goods ─────────────────────────────────
  {
    id: "st-vincent-de-paul",
    name: "St. Vincent de Paul Society",
    description: "Providing community assistance including food, clothing, furniture, utility payments, and rent assistance to families in crisis. Operates thrift stores and direct aid programs across the OKC metro.",
    category_id: "clothing",
    category_name: "Clothing & Goods",
    address: "9700 N Military Ave, Oklahoma City, OK 73114",
    phone: "(405) 842-6426",
    website: "https://www.svdpokc.org",
    hours: "Mon-Sat 9 AM - 5 PM",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0iCRw_Tf-H_4qA8IdpsdHTCCuyk_Tmr9zkdZ0l9eflg6pkYzKC4wrdw9W4ga_GKp9hrA_ob0ANe9RRYXMGzFTUqhp69VtA5sL-uZTnXWA-yvBd7M8sRqU5X8jDAqCjPCAVTeCgCQGn7_u1WMLmhY5wxjSWXZYRCIX9UYASQkpnpmWKD3b-K2aLUNoOWIx9NNuvEPXq7T_GcuPVKtyTgdAphkzrnP5YcOwfcgq-NuZH1XGvHF70fDh0v7FMWnRTvVQ3Ytyvqh13lQ",
    tags: ["Clothing", "Furniture", "Rent Assistance", "Utility Help"],
  },
  {
    id: "oklahoma-mission",
    name: "Oklahoma City Rescue Mission Thrift",
    description: "Thrift store offering affordable clothing, household items, and furniture. Proceeds directly support the City Rescue Mission's shelter and recovery programs.",
    category_id: "clothing",
    category_name: "Clothing & Goods",
    address: "800 W California Ave, Oklahoma City, OK 73106",
    phone: "(405) 232-2709",
    website: "https://www.cityrescue.org",
    hours: "Mon-Sat 9 AM - 5 PM",
    image_url: "",
    tags: ["Thrift Store", "Affordable", "Supports Shelter"],
  },
];

// Helper functions
export function getResourceById(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}

export function getResourcesByCategory(categoryId: string): Resource[] {
  if (categoryId === "all") return resources;
  return resources.filter((r) => r.category_id === categoryId);
}

export function searchResources(query: string): Resource[] {
  const q = query.toLowerCase();
  return resources.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category_name.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q)) ||
      r.address.toLowerCase().includes(q)
  );
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
