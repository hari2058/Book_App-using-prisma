import { Request, Response } from "express";
import {  getUsersById } from "../../prismaModels/user.models";

export const getUserByIdController = async (req: Request, res: Response) => {
  const params = req.params;
  const userId = Number(params);

  const user = await getUsersById(userId);

  res.json({
    message: `user fetched by id-${userId}`,
    data: user,
  });
};
