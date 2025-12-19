import jwt from "jsonwebtoken";
import { Role } from "../generated/prisma/enums";
import { ENV } from "./env";
import { error } from "console";

type TTokenPayLoad = {
  id: number;
  email: string;
  username: string;
  role: Role;
};
export function generateToken(userPayLoad: TTokenPayLoad, expiryTimeInSeconds: number) {
  const token = jwt.sign(userPayLoad, ENV.JWT_SECRET, {
    expiresIn: expiryTimeInSeconds, // 15 min
  });

  return token;
}

export function verifyToken(token: string) {
  try {
    const userPayLoad = jwt.verify(token, ENV.JWT_SECRET);

    return userPayLoad as TTokenPayLoad;
  } catch {
    console.log(`failed to verify token`, error);
    return null;
  }
}
