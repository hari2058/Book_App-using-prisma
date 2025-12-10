import { getAllGenre } from "../../prismaModels/genre.model";
import { Request, Response } from "express";

export const getAllGenreController = async (req: Request, res: Response) => {
  const allGenre = await getAllGenre();

  res.json({
    message: `All genre fetched`,
    data: allGenre,
  });
};
