import { config } from "dotenv";

config({
  path: ".env",
});

export const ENV = {
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  JWT_EXPIRATION_TIME_IN_SECONDS:
   Number( process.env.JWT_EXPIRATION_TIME_IN_SECOND) || 60,
};
