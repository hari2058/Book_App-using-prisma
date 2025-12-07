import { Request, Response } from "express";
import { createBooks } from "../../prismaModels/book.model";
import { Prisma } from "../../generated/prisma/client";

// export type BooksCreateInput = {
//   title: string;
//   description?: string | null;
//   published_date?: string | Date | null;
//   status?: BookStatus;
//   completed_at?: Date | string | null;
//   updated_at?: Date | string;
//   language: string;
//   author: Prisma.authorsCreateNestedOneWithoutBooksInput;
//   genre: Prisma.genreCreateNestedOneWithoutBooksInput;
// };

export async function createBooksControllers(req: Request, res: Response) {
  const body = req.body as Prisma.booksCreateInput;
 

  const createdBooks = await createBooks(body);

  res.json({
    message: `Books created successfully.`,
    data: createdBooks,
  });
}
