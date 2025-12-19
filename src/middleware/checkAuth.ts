import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { verifyToken } from "../lib/token";

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token as string;

  if (!token) {
    res.status(401).json({
      message: "You are not logged in!",
    });
   
  }

 

  const userPayLoad = verifyToken(token);

  if (!userPayLoad) {
    res.status(401).json({
      message: `Error verifying token! Please login again.`,
    });
    return;
  }
  req.user = userPayLoad;

  next();
}

export async function checkRefreshToken(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const token = req.cookies.refreshToken as string;

  if (!token) {
    res.status(401).json({
      message: "You are not logged in!, your token has expired, login again",
    });
  }

  const userPayLoad = verifyToken(token);

  if (!userPayLoad) {
    res.status(401).json({
      message: `Error verifying token! Please login again.`,
    });
    return;
  }
  req.user = userPayLoad;

  next();
}
