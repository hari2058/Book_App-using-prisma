import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function accessControlCheck(
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

  const userSession = await prisma.userSession.findFirst({
    where: {
      session_id: token,
    },
    include: {
      user: true,
    },
  });

  if (!userSession) {
    res.status(401).json({
      message: "your session not found! please login again",
    });
    return;
  }

  req.user = userSession?.user;
  const role = userSession?.user.role;

  if (role === "SUPER_ADMIN") {
    next();
  } else {
    res.status(401).json({
      message: "Access Denied! You are not allowed to access.",
    });
  }
}
