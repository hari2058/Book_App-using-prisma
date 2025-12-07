
import { Request, Response } from "express";
import {  updateAuthor } from "../../prismaModels/author.model";

type authorId = string;

export const updateAuthorsControllers = async (req: Request, res: Response) => {
  const authorId = parseInt(req.params.authorId as authorId);
  const body = req.body;

  const updateAuthors= await updateAuthor(authorId, body);

  return res.json({
    message: `Author data fetched by id -${authorId}`,
    data: updateAuthors,
  });
};
