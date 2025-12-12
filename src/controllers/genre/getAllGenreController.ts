import { getAllGenre } from "../../prismaModels/genre.model";
import { Request, Response } from "express";

export const getAllGenreController = async (req: Request, res: Response) => {
  const genre_title = req.query.genre_title as string;

  const allGenre = await getAllGenre({
    genre_title: genre_title,
  });

  res.json({
    message: `All genre fetched`,
    data: allGenre,
  });
};
