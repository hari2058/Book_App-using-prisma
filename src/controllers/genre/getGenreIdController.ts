import { Request, Response } from "express";
import { getGenreById } from "../../prismaModels/genre.model";

export const getGenreByIdController = async (req: Request, res: Response) => {
  const params = req.params;
  const genreId = parseInt(params.genreId as string);


  const genreData = await getGenreById(genreId);

  res.json({
    message:`Genre fetched by id-${genreId}`,
    data: genreData
  })
};
