import Address from "./domain/entities/address";
import Customer from "./domain/entities/costumer";
import Order from "./domain/entities/order";
import OrderItem from "./domain/entities/order_item";

let customer = new Customer("123", "Marco Antonio");
const address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 10);
const item2 = new OrderItem("2", "Item 2", 15, "p2", 10);
const order = new Order("1", "123", [item1, item2]);
