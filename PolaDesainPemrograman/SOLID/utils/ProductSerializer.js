// src/utils/ProductSerializer.js
class ProductSerializer {
    serialize(product) {
      return JSON.stringify({
        name: product.name,
        price: product.price,
      });
    }
  
    deserialize(data) {
      const parsed = JSON.parse(data);
      return {
        name: parsed.name,
        price: parsed.price,
      };
    }
}
  
export default ProductSerializer;  