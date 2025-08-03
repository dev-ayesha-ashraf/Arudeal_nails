export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface Seller {
  _id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface Listing {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  listingId: string;
  listingType: string;
  badge?: string;
  purpose?: string;
  createdAt: string;
  updatedAt: string;
  categoryId: Category;
  sellerId: Seller;
}
