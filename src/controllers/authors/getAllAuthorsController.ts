import { Request, Response } from "express";
import { getAllAuthors } from "../../prismaModels/author.model";

export const getAllAuthorsControllers = async (req: Request, res: Response) => {

  const query = req.query;
  const author_name = query.author_name as string;
  const birth_Date = query.birth_Date as string;
  const authorsData = await getAllAuthors({
    author_name: author_name,
    birth_Date: birth_Date,

  });

  res.json({
    message: `All Authors data fetched.`,
    data: authorsData,
  });
};
