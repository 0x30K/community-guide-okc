export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  category_id: string;
  category_name: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  image_url: string;
  tags: string[];
  lat?: number;
  lng?: number;
}
