import type { OrderStatus, PaymentStatus } from "../enums/order.enums";
import type { Book } from "./product";
import type { CartItem } from "./search";

export interface CreateOrderInput {
  deliveryAddress: string;
  phoneNumber: string;
  items: CartItem[];
}
export interface OrderItem {
  _id: string;
  itemQuantity: number;
  itemPrice: number;
  orderId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface Order {
  _id: string;
  orderTotal: number;
  deliveryFee: number;
  orderStatus: OrderStatus;
  memberId: string;
  paymentStatus: PaymentStatus;
  deliveryAddress: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  orderItems?: OrderItem[];
  productData?: Book[];
}
export interface OrderInquiry {
  page: number;
  limit: number;
  orderStatus: OrderStatus;
}
export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  productId: string;
  orderId?: string;
  deliveryAddress: string;
  phoneNumber?: string;
}
export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}
