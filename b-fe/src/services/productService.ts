import axios from "axios";
import { Product, Packet } from "../types/productsTypes";

const BASE_URL = "https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io";
const API_BASE_URL ="https://3a631b5b-9b1b-4b7f-b736-00d1ce4a1505.mock.pstmn.io";

export const fetchProductsAndPackets = async (): Promise<{ products: Product[]; packets: Packet[] }> => {
  try {
    const response = await axios.get(`${BASE_URL}/packets-and-products`);
    return response.data.data; 
  } catch (error) {
    throw new Error((error as Error).message || "Could not receive products or packages! Please try again.");
  }
  
};

export const verifyPacketPrice = async (packet: { _id: string; count: number }[], totalPrice: number, token: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/verify-packet-price`,
      { packet, totalPrice },
      {
        headers: { "x-auth-token": token },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message || "Could not receive products or packages! Please try again.");
  }
  
};
