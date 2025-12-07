import { Request, Response } from "express";
import { z } from "zod";
import { signUpUser } from "../../prismaModels/user.models";
import { Gender } from "../../generated/prisma/enums";

const SignUpUserSchema = z.object({
  username: z.string().min(5).max(30),
  email: z.email(),
  password: z.string().min(8).max(15),
  gender: z.enum(Gender),
});

export type TSignUpUserSchema = z.infer<typeof SignUpUserSchema>;

export async function signUpUserController(req: Request, res: Response) {
  const body = req.body;
  // validation
  const parseData = SignUpUserSchema.safeParse(body);

  if (!parseData.success) {
    res.status(400).json({
      message: `Invalid data.`,
      errors: parseData.error,
    });
    return;
  }

  //data is valid
  const user = await signUpUser(parseData.data);

  res.json({
    message: `Registered Success.`,
    data: user,
  });
}
