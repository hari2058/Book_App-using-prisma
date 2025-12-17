import { NextFunction, Request, Response } from "express";
import { Role } from "../generated/prisma/enums";



export function generateAccessControlMiddleware(roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user.role;
    console.log("userrole = ", userRole)

    if (!userRole) {
      res.status(401).json({
        message: `Your user role not found........`,
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
