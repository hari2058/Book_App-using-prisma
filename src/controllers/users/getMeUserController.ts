import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
// import { loggedInUsers } from "./loginUserControllers";

export async function getMeUserController(req: Request, res: Response) {
  const user = req.user;

  if (!user) {
    throw new Error(`You are not logged in!!`);
  }
  const token = req.cookies.token;

  if (!token) {
    throw new Error(`You are not logged in!`);
  }

  //  const userFound =  loggedInUsers.find(userToken => userToken === token);
  const userFound = await prisma.users.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!userFound) {
    throw new Error(`User not found `);
  }

  res.json({
    message: " you are logged in.",
    data: { user: userFound },
  });
}
