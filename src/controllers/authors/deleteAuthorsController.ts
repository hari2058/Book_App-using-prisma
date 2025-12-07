import { Request, Response } from "express";
import { deleteAuthor } from "../../prismaModels/author.model";

type authorId = string;
export const deleteAuthorsControllers = async (req: Request, res: Response) => {
  const authorId = parseInt(req.params.authorId as authorId);

  const deletedAuthor = await deleteAuthor(authorId);

  return res.json({
    message: ` Author Information deleted by- ${authorId}`,
    data: deletedAuthor,
  });
};
