import OrderItem from "./order_item";

export default class Order {
  private id: string;
  private customerId: string;
  private items: OrderItem[] = [];
  private total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.total = this.calculateTotal();
    this.validate();
  }

  validate(): boolean {
    if (this.id.length === 0) {
      throw new Error("Id is required");
    }
    if (this.customerId.length === 0) {
      throw new Error("customerId is required");
    }
    if (this.items.length === 0) {
      throw new Error("Items are required");
    }
    if (this.items.some((item) => item.getQuantity() <= 0)) {
      throw new Error("Quantity must be greater than zero");
    }

    return true;
  }

  getTotal(): number {
    return this.total;
  }

  calculateTotal(): number {
    return this.items.reduce((acc, item) => acc + item.getPrice(), 0);
  }
}
