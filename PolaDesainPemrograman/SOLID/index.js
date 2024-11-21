// src/index.js
import Product from './models/Product.js';
import ProductRepository from './repositories/ProductRepository.js';
import DiscountCalculator from './services/DiscountCalculator.js';
import ProductService from './services/ProductService.js';
import SeasonalDiscount from './strategies/SeasonalDiscount.js';
import ClearanceDiscount from './strategies/ClearanceDiscount.js';
import ProductSerializer from './utils/ProductSerializer.js';

const productRepo = new ProductRepository();
const discountCalc = new DiscountCalculator();
const productService = new ProductService(productRepo, discountCalc);

const newProduct = new Product('Smartphone', 800);
const clearanceDiscount = new ClearanceDiscount();
const seasonalDiscount = new SeasonalDiscount();
const productSerializer = new ProductSerializer();

// Menggunakan ClearanceDiscount
const discountedPrice = clearanceDiscount.calculate(newProduct.price);
console.log(`Harga setelah clearance discount: ${discountedPrice}`);
productService.addProduct(newProduct, clearanceDiscount);

// Serialisasi produk
const serializedProduct = productSerializer.serialize(newProduct);
console.log(`Serialized Product: ${serializedProduct}`);

// Deserialisasi produk
const deserializedProduct = productSerializer.deserialize(serializedProduct);
console.log(`Deserialized Product:`, deserializedProduct);