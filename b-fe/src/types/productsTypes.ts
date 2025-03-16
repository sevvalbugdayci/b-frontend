export interface SubProduct {
  _id: string;
  name: string;
  price: number;
}

export interface Product {
  _id: string;
  title: string;
  image: string;
  type: "Menstrual" | "Other";
  subProducts: SubProduct[];
}

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  count: number;
}

export interface Packet {
  _id: string;
  title: string;
  image: string;
}

export interface VerifyPacketPayload {
  packet: { _id: string; count: number }[];
  totalPrice: number;
  token: string;
}

export interface ProductsState {
  products: Product[];
  packets: Packet[];
  cart: CartItem[];
  totalPrice: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}