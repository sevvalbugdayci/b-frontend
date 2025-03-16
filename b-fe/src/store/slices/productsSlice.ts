import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsAndPackets, verifyPacketPrice } from "../../services/productService";
import { Product, Packet, VerifyPacketPayload } from "../../types/productsTypes";

export const fetchProducts = createAsyncThunk<
  { products: Product[]; packets: Packet[] },
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchProductsAndPackets();
    return data;
  } catch (error: unknown) { 
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred.");
  }
});

export const verifyPacket = createAsyncThunk<
  void,
  VerifyPacketPayload,
  { rejectValue: string }
>("products/verifyPacket", async ({ packet, totalPrice, token }, { rejectWithValue }) => {
  try {
    await verifyPacketPrice(packet, totalPrice, token);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred.");
  }
});

interface CartItem {
  _id: string;
  name: string;
  price: number;
  count: number;
}

interface ProductsState {
  products: Product[];
  packets: Packet[];
  cart: CartItem[];
  totalPrice: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  packets: [],
  cart: [],
  totalPrice: 0,
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { _id, name, price, count } = action.payload;
      const existingItem = state.cart.find(item => item._id === _id);

      if (existingItem) {
        existingItem.count += count;
        if (existingItem.count <= 0) {
          state.cart = state.cart.filter(item => item._id !== _id);
        }
      } else {
        if (count > 0) {
          state.cart.push({ _id, name, price, count });
        }
      }

      state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.count, 0);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.packets = action.payload.packets;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Products could not be loaded!";
      })

      .addCase(verifyPacket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyPacket.fulfilled, (state) => {
        state.status = "succeeded";
        state.cart = [];
        state.totalPrice = 0;
      })
      .addCase(verifyPacket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "The package price could not be verified!";
      });
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
