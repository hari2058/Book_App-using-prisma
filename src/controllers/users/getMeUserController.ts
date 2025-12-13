import { Request, Response } from "express";
import { loggedInUsers } from "./loginUserControllers";

export async function getMeUserController(req: Request, res: Response) {
  const token = req.query.token;

  if (!token) {
    throw new Error(`You are not logged in!`);
  }

 const userFound =  loggedInUsers.find(userToken => userToken === token);

 if(!userFound) {
    throw new Error(`You are not logged in!`);
 }

  res.json({
    message: " you are logged in.",
    data: { token },
  });
}
