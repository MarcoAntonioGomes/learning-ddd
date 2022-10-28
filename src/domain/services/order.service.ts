import Customer from "../entities/costumer";
import Order from "../entities/order";
import OrderItem from "../entities/order_item";
import { v4 as uuid } from "uuid";

export default class OrderService {
  static total(orders: Order[]) {
    let total = 0;
    orders.forEach((order) => {
      total += order.getTotal();
    });
    return total;
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    const order = new Order(uuid(), customer.getId(), items);
    customer.addRewardPoints(order.getTotal() / 2);
    return order;
  }
}
