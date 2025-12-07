import { Request, Response } from "express";
import { createAuthors } from "../../prismaModels/author.model";
import { Prisma } from "../../generated/prisma/client";

export const createAuthorsControllers = async (req: Request, res: Response) => {
  const body = req.body as Prisma.authorsCreateInput;

  const createdAuthors = await createAuthors(body);

  res.json({
    message: `Authors created.`,
    data: createdAuthors,
  });
};
