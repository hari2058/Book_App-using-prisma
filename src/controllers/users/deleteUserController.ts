import { Request, Response } from "express";
import { deleteUser } from "../../prismaModels/user.models";

export const deleteUserController = async (req: Request, res: Response) => {
  const token = req.cookies.token;

  if (!token) {
    throw new Error(`You are not logged in!`);
  }
  const paramsUserId = Number(token.userId);

  const userId = req.user.id;
  if (!userId) {
    res.status(401).json({
      message: `You are not authorized`,
    });
    return;
  }

  if (paramsUserId !== userId) {
    res.status(401).json({
      message: "You can only access your data.",
    });
    return; 
  }

  const user = await deleteUser(userId);

  res.json({
    message: `user fetched by id-${userId}`,
    data: user,
  });
};
