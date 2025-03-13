import { describe, it, expect, beforeEach } from "vitest";
import { Product } from "./ProductsService";
import { addToCart, clearCart, removeFromCart, store } from "./store";

// 🛒 Sample product for testing
const sampleProduct: Product = {
  id: 1,
  title: "Test Product",
  description: "A sample product for testing purposes.",
  category: "Electronics",
  price: 99.99,
  discountPercentage: 10.5,
  images: "test-product.jpg",
};

describe("Redux Store - Cart Slice", () => {
  beforeEach(() => {
    store.dispatch(clearCart()); // Reset state before each test
  });

  it("should initialize with an empty cart", () => {
    const state = store.getState().cart;
    expect(state.cart).toEqual([]); // Cart should be empty initially
  });

  it("should add a product to the cart", () => {
    store.dispatch(addToCart(sampleProduct));
    const state = store.getState().cart;
    expect(state.cart).toHaveLength(1);
    expect(state.cart[0]).toEqual(sampleProduct);
  });

  it("should remove a product from the cart by id", () => {
    store.dispatch(addToCart(sampleProduct));
    store.dispatch(removeFromCart(sampleProduct.id));

    const state = store.getState().cart;
    expect(state.cart).toEqual([]); // Product should be removed
  });

  it("should clear the cart", () => {
    store.dispatch(addToCart(sampleProduct));
    store.dispatch(addToCart({ ...sampleProduct, id: 2 })); // Add another product
    store.dispatch(clearCart());

    const state = store.getState().cart;
    expect(state.cart).toEqual([]); // Cart should be empty
  });
});
