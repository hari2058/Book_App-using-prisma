import { NextFunction, Request, Response } from "express";

export async function checkSuperAdminRole(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userRole = req.user?.role;

  if (userRole !== "SUPER_ADMIN") {
    res.status(403).json({
      message: "Unauthorized! you cannot access this resource.",
    });
    return;
  }
  next();
}

export async function checkAdminRole(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userRole = req.user?.role;

  if (userRole !== "ADMIN") {
    res.status(403).json({
      message: "Unauthorized! you cannot access this resource.",
    });
    return;
  }
  next();
}

export async function checkUserRole(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userRole = req.user?.role;

  if (userRole !== "USER") {
    res.status(403).json({
      message: "Unauthorized! you cannot access this resource.",
    });
    return;
  }
  next();
}
