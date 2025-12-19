import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
// import { loggedInUsers } from "./loginUserControllers";

export async function userLogoutController(req: Request, res: Response) {
  const token = req.cookies.token;

  if (!token) {
    throw new Error(`You are not logged in!`);
  }

  const user = req.user;

  const userFound = await prisma.users.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!userFound) {
    throw new Error(`You are not logged in!`);
  }

  // const loggedOutUser = loggedInUsers.splice(
  //   loggedInUsers.indexOf(userFound),
  //   1
  // );

  await prisma.users.delete({
    where: {
      id: userFound.id,
    },
  });

  res.clearCookie("token");

  res.json({
    message: `Account logged bou by User_Name -${user.username}`,
  });
}
