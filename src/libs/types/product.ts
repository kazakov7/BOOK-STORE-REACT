import type { BookCategory, BookStatus } from "../enums/product.enum";

export interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  category: BookCategory;
  price: number;
  stock: number;
  status: BookStatus;
  images: string[];
  views: number;
  averageRating: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface BookInput {
  title: string;
  author: string;
  isbn: string;
  category: BookCategory;
  price: number;
  stock: number;
  status?: BookStatus;
  images: string[];
  description?: string;
}
export interface BookInquery {
  order: string;
  page: number;
  limit: number;
  category?: BookCategory;
  rating?: number;
  language?: string;
  search?: string;
}
