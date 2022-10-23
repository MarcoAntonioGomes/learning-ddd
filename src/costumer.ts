//Changed the anemic class to fit to the business rules

class Customer {
  private id: string;
  private name: string;
  private address: string;
  private active: boolean = false;

  constructor(id: string, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.validate();
  }

  validate() {
    if (this.name.length === 0) {
      throw new Error("Name is required");
    }

    if (this.id.length === 0) {
      throw new Error("Id is required");
    }
  }

  changeName(name: string) {
    this.name = name;
  }

  activate() {
    if (this.address.length === 0) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this.active = true;
  }

  desactive() {
    this.active = false;
  }
}
