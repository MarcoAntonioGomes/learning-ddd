import Product from "../entities/product";

export default class ProductService {
  static increasePrice(products: Product[], percentage: number) {
    products.forEach((product) => {
      product.changePrice(
        (product.getPrice() * percentage) / 100 + product.getPrice()
      );
    });
  }
}
