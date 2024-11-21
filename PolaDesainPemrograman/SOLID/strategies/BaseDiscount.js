// src/strategies/BaseDiscount.js
class BaseDiscount {
    calculate(price) {
      throw new Error('Method "calculate" harus diimplementasikan oleh subclass.');
    }
}
  
export default BaseDiscount;  