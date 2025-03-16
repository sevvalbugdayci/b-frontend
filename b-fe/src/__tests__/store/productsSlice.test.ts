import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { addToCart, fetchProducts, verifyPacket } from "../../store/slices/productsSlice";
import { server } from "../../../mocks/server";

const createTestStore = () => {
  return configureStore({
    reducer: { products: productsReducer },
  });
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe("productsSlice", () => {
  let store: ReturnType<typeof createTestStore>;

  beforeEach(() => {
    store = createTestStore();
  });

  it("should have an initial state", () => {
    const state = store.getState().products;
    expect(state.products).toEqual([]);
    expect(state.packets).toEqual([]);
    expect(state.cart).toEqual([]);
    expect(state.totalPrice).toBe(0);
    expect(state.status).toBe("idle");
  });

  it("should fetch products and update state", async () => {
    await store.dispatch(fetchProducts());
    const state = store.getState().products;
    expect(state.products.length).toBe(1);
    expect(state.packets.length).toBe(1);
    expect(state.status).toBe("succeeded");
  });

  it("should add an item to the cart", () => {
    store.dispatch(addToCart({ _id: "1", name: "Test Product", price: 100, count: 2 }));
    const state = store.getState().products;
    expect(state.cart.length).toBe(1);
    expect(state.cart[0].count).toBe(2);
    expect(state.totalPrice).toBe(200);
  });

  it("should verify packet price and clear cart on success", async () => {
    store.dispatch(addToCart({ _id: "1", name: "Test Product", price: 100, count: 2 }));
    await store.dispatch(verifyPacket({ packet: [{ _id: "1", count: 2 }], totalPrice: 200, token: "test-token" }));
    const state = store.getState().products;
    expect(state.cart.length).toBe(0);
    expect(state.totalPrice).toBe(0);
  });
});
