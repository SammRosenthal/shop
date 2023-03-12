import { rest } from "msw";
import { faker } from "@faker-js/faker";

function generateUser() {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

function mockUserResponse() {
  return rest.get("/user", (req, res, ctx) => {
    const { shopAuth } = req.cookies;

    if (shopAuth) {
      return res(
        ctx.status(200),
        ctx.json(generateUser()),
        ctx.cookie("shopAuth", "your-mock-auth-cookie-value", {
          maxAge: 1000 * 60 * 60 * 24 * 30,
        })
      );
    }

    return res(ctx.status(200));
  });
}

function mockLoginResponse() {
  return rest.post("/login", (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(generateUser()),
      ctx.cookie("shopAuth", "your-mock-auth-cookie-value", {
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
    )
  );
}

function mockLogOutResponse() {
  return rest.post("/logout", (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({}), ctx.cookie("shopAuth", ""))
  );
}

export { mockUserResponse, mockLoginResponse, mockLogOutResponse };
