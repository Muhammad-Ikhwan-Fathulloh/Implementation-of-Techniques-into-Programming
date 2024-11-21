// src/services/DiscountCalculator.js
class DiscountCalculator {
    calculate(price, discountStrategy) {
      return discountStrategy.calculate(price);
    }
}
  
export default DiscountCalculator;