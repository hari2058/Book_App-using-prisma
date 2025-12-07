import { Request, Response } from "express";
import { getAuthorById } from "../../prismaModels/author.model";

type authorId = string;

export const getAuthorByIdControllers = async (req: Request, res: Response) => {
  const authorId = parseInt(req.params.authorId as authorId);

  const authorData = await getAuthorById(authorId);

  return res.json({
    message: `Author data fetched by id -${authorId}`,
    data: authorData,
  });
};
