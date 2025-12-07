import { Request, Response } from "express";
import { deleteUser } from "../../prismaModels/user.models";

export const deleteUserController = async (req: Request, res: Response) => {
  const params = req.params;
  const userId = Number(params);

  const user = await deleteUser(userId);

  res.json({
    message: `user fetched by id-${userId}`,
    data: user,
  });
};