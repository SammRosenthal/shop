import {
  mockLoginResponse,
  mockLogOutResponse,
  mockUserResponse,
} from "../hooks/api/use-user-api/useUserApi.mock";

const handlers = [
  mockUserResponse(),
  mockLoginResponse(),
  mockLogOutResponse(),
];

export { handlers };
