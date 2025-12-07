import { Request, Response } from "express";
import { getBooksById } from "../../prismaModels/book.model";



export const getBookByIdControllers = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const bookIdNum = parseInt(bookId as string);

  const Book = await getBooksById(bookIdNum);

  res.json({
    message: `Book fetched by id-${bookId}`,
    data: Book,
  });
};
