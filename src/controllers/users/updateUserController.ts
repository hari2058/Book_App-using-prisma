import { Request, Response } from "express";
import { z } from "zod";
import { updateUser } from "../../prismaModels/user.models";
import { Gender } from "../../generated/prisma/enums";

const UpdateUserSchema = z.object({
  username: z.string().min(5).max(30).optional(),
  email: z.email().optional(),
  password: z.string().min(8).max(15).optional(),
  gender: z.enum(Gender).optional(),
});

export type TUpdateUserSchema = z.infer<typeof UpdateUserSchema>;

export const updateUserController = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  const body = req.body;

  const parsedData = UpdateUserSchema.safeParse(body);

  if (!parsedData.success) {
    res.status(400).json({
      message: `Invalid Data`,
      errors: parsedData.error,
    });
  }

  const user = await updateUser(userId, body);

  res.json({
    message: `User data updated by id-${userId}`,
    data: user,
  });
};
