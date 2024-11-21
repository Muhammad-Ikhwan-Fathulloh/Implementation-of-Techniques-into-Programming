// src/strategies/SeasonalDiscount.js
import BaseDiscount from './BaseDiscount.js';

class SeasonalDiscount extends BaseDiscount {
  calculate(price) {
    return price - price * 0.1; // 10% diskon musiman
  }
}

export default SeasonalDiscount;