import { setupServer } from "msw/node";
import { rest } from "msw";

export const server = setupServer(
  rest.get("https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io/packets-and-products", (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: {
          products: [{ _id: "1", title: "Test Product", price: 100, type: "Menstrual", subProducts: [] }],
          packets: [{ _id: "2", title: "Test Packet", image: "test.png" }],
        },
      })
    );
  }),
  rest.post("https://3a631b5b-9b1b-4b7f-b736-00d1ce4a1505.mock.pstmn.io/verify-packet-price", (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  })
);