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
