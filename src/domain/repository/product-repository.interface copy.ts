import Customer from "../entities/costumer";
import RepositoryInterface from "./repository-interface";

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {}
