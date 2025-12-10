import { Request, Response } from "express";
import { createBooks } from "../../prismaModels/book.model";
import { BookStatus } from "../../generated/prisma/client";

export type BooksCreateInput = {
  title: string;
  description?: string | null;
  published_date?: string | Date | null;
  status?: BookStatus;
  completed_at?: string | Date |  null;
  updated_at?: Date | string;
  language: string;
  author_id: number;
  genre_id: number;
};

export async function createBooksControllers(req: Request, res: Response) {
  const body = req.body as BooksCreateInput;
 

  const createdBooks = await createBooks(body);

  res.json({
    message: `Books created successfully.`,
    data: createdBooks,
  });
}
