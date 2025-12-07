import { deleteBooks } from "../../prismaModels/book.model";
import { Request, Response } from "express";



export const deleteBookControllers = async (req: Request, res: Response) => {
  const bookId = parseInt(req.params.bookId as string);

  const deletedBook = await deleteBooks(bookId);

  res.json({
    message: `Book deleted successfully`,
    data: deletedBook,
  });
};
