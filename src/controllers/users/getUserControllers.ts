import { Request, Response } from "express";
import { getAllUsers } from "../../prismaModels/user.models";

export const getAllUserController = async (req: Request, res: Response) => {
  const allUser = await getAllUsers();

  res.json({
    message: `All users data fetched`,
    data: allUser,
  });
};
