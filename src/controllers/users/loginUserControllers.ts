import { Request, Response } from "express";
import { loginUser } from "../../prismaModels/user.models";
import z from "zod";

const LoginUserSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(5).max(20),
});

export type TLoginUserSchema = z.infer<typeof LoginUserSchema>;

export const loggedInUsers: string[] = [];

export const logInUserController = async (req: Request, res: Response) => {
  const body = req.body;
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
  const randomNum = Math.floor(Math.random() * 100000);
  const randomString = randomNum.toString();

  loggedInUsers.push(randomString);

  res.cookie("token", randomString, {
    httpOnly: true,
  });

  res.json({
    message: " Logged in",
    data: { ...user, token: randomString },
  });
};
