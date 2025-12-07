import { Request, Response } from "express";
import { getAllAuthors } from "../../prismaModels/author.model";

export const getAllAuthorsControllers = async (req: Request, res: Response) => {
  const authorsData = await getAllAuthors();

  res.json({
    message: `All Authors data fetched.`,
    data: authorsData,
  });
};
