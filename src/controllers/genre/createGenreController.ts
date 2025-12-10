import { Request, Response } from "express";
import { createGenre } from "../../prismaModels/genre.model";

export type CreateGenreInputs = {
  genre_title: string;
  description: string;
};

export async function createGenreControllers(req: Request, res: Response) {
  const body = req.body;

  const createdGenre = await createGenre(body);

  res.json({
    message: `Genre created`,
    data: createdGenre,
  });
}
