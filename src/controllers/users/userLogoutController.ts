import { Request, Response } from "express";
import { loggedInUsers } from "./loginUserControllers";

export function userLogoutController(req: Request, res: Response) {
  const token = req.cookies.token;

  if (!token) {
    throw new Error(`You are not logged in!`);
  }

  const userFound = loggedInUsers.find((userToken) => userToken === token);

  if (!userFound) {
    throw new Error(`You are not logged in!`);
  }

  const loggedOutUser = loggedInUsers.splice(
    loggedInUsers.indexOf(userFound),
    1
  );

  res.clearCookie("token");

  res.json({
    message: "you are logged out!",
    data: loggedOutUser,
  });
}
