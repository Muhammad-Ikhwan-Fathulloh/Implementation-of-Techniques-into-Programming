// src/services/ProductService.js
class ProductService {
    constructor(repository, discountCalculator) {
      this.repository = repository;
      this.discountCalculator = discountCalculator;
    }
  
    addProduct(product, discount) {
      const discountedPrice = this.discountCalculator.calculate(product.price, discount);
      product.price = discountedPrice;
      this.repository.save(product);
    }
}
  
export default ProductService;  