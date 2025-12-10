import { updateGenre } from "../../prismaModels/genre.model";
import { Request, Response } from "express";
import { CreateGenreInputs } from "./createGenreController";

export async function updateGenreController(req: Request, res: Response) {
  const genreId = parseInt(req.params.genreId as string);
  const body = req.body as CreateGenreInputs;

  

  const updatedGenre = await updateGenre(genreId, body);

  res.json({
    message: `Genre information updated.`,
    data: updatedGenre,
  });
}
