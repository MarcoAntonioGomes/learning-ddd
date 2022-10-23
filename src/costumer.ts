//Changed the anemic class to fit to the business rules

class Customer {
  private id: string;
  private name: string;
  private address: string;
  private active: boolean = true;

  constructor(id: string, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  changeName(name: string) {
    this.name = name;
  }

  activate() {
    this.active = true;
  }

  desactive() {
    this.active = false;
  }
}
