import { rest } from "msw";

const handlers = [
  rest.get("/ping", (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ message: "pong" }))
  ),
];

export { handlers };
