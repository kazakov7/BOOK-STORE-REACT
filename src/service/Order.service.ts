import axios from "axios";
import { serverApi } from "../libs/enums/config";
import type { Order } from "../libs/enums/order.enums";
import type { CreateOrderInput, OrderInquiry } from "../libs/types/order";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async createOrder(input: CreateOrderInput): Promise<Order | void> {
    try {
      const orderItems = input.items.map((cartItem) => {
        return {
          itemQuantity: cartItem.quantity,
          itemPrice: cartItem.price,
          productId: cartItem._id,
        };
      });
      const createOrder = {
        deliveryAddress: input.deliveryAddress,
        phoneNumber: input.phoneNumber,
        items: orderItems,
      };
      const url = this.path + "/user/order/create";
      const result = await axios.post(url, createOrder, {
        withCredentials: true,
      });

      return result.data;
    } catch (err) {
      console.log("Error. cerateOrder:", err);
      throw err;
    }
  }

  public async getMyOrders(): Promise<Order[]> {
    try {
      const url = `${this.path}/user/order/all`;

      const result = await axios.get(url, {
        withCredentials: true,
      });
      console.log("getMyOrders:", result);

      return result.data;
    } catch (err) {
      console.log("Error. getMyOrders:", err);
      throw err;
    }
  }
}
export default OrderService;
