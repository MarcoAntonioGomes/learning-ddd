import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("customerId is required");
  });

  it("should throw error items are empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items are required");
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 100, "p2", 2);
    const order = new Order("o1", "c1", [item]);

    let total = order.getTotal();

    expect(total).toBe(200);

    const order2 = new Order("o1", "c1", [item, item2]);

    let total2 = order2.getTotal();

    expect(total2).toBe(400);
  });

  it("should throw error if the item qtd is less or equal zero", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 100, "p1", 0);
      const order = new Order("o1", "c1", [item]);
    }).toThrowError("Quantity must be greater than zero");
  });
});