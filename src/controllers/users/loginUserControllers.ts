import { Request, Response } from "express";
import { loginUser } from "../../prismaModels/user.models";
import z from "zod";
import { prisma } from "../../lib/prisma";
import { generateToken } from "../../lib/token";
import { ENV } from "../../lib/env";

const LoginUserSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(5).max(20),
});

export type TLoginUserSchema = z.infer<typeof LoginUserSchema>;

// export let loggedInUsers: string[] = [];

// export function removeUser(token: string) {
//   loggedInUsers = loggedInUsers.filter((userToken) => userToken !== token);

// }

export const logInUserController = async (req: Request, res: Response) => {
  const body = req.body as TLoginUserSchema;
  const parsedData = LoginUserSchema.safeParse(body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Invalid data",
      data: parsedData.error,
    });
    return;
  }

  //data valid
  const user = await loginUser(parsedData.data);

  // const randomNum = Math.floor(Math.random() * 100000);
  // const randomString = randomNum.toString();

  const token = generateToken({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  });

  // loggedInUsers.push(randomString);
  // await prisma.userSession.create({
  //   data: {
  //     user_id: user.id,
  //     session_id: randomString,
  //   },
  // });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: ENV.JWT_EXPIRATION_TIME_IN_SECONDS *1000 ,
    domain: "localhost",
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  res.json({
    message: " Logged in",
    data: { ...user, token: token },
  });
};
