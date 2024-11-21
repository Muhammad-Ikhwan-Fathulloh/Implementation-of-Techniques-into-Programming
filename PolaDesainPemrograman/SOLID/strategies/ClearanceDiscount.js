// src/strategies/ClearanceDiscount.js
import BaseDiscount from './BaseDiscount.js';

class ClearanceDiscount extends BaseDiscount {
  calculate(price) {
    return price - price * 0.5; // Diskon 50% untuk clearance
  }
}

export default ClearanceDiscount;