import { config } from "dotenv";

config({
  path: ".env",
});

export const ENV = {
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  JWT_EXPIRATION_TIME_IN_SECONDS:
    Number(process.env.JWT_EXPIRATION_TIME_IN_SECOND) || 60,
  REFRESH_TOKEN_EXPIRATION_TIME_IN_SECONDS: Number(
    process.env.REFRESH_TOKEN_EXPIRATION_TIME_IN_SECONDS || 900
  ),
};
