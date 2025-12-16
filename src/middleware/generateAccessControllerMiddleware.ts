import { NextFunction, Request, Response } from "express";

type Role = "SUPER_ADMIN" | "ADMIN" | "USER";

export function generateAccessControlMiddleware(roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole) {
      res.status(401).json({
        message: `Your user role not found`,
      });
      return;
    }

    if (!roles.includes(userRole)) {
      res.status(403).json({
        message: `Unauthorized! you cannot access this resource. Expected Role: ${roles.join(
          " "
        )} but got role: ${userRole}`,
      });
      return;
    }
    next();
  };
}
