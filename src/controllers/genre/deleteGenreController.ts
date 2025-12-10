import { Request, Response } from "express";
import { deleteGenre } from "../../prismaModels/genre.model";

export const deleteGenreController = async (req: Request, res: Response) => {
  const genreId = parseInt(req.params.genreId as string);

  const deletedGenre = await deleteGenre(genreId);

  res.json({
    message: `Genre data deleted by id-${genreId}`,
    data: deletedGenre,
  });
};
