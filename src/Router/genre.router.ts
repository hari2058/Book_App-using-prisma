import { Application } from "express";
import { createGenreControllers } from "../controllers/genre/createGenreController";
import { getAllGenreController } from "../controllers/genre/getAllGenreController";
import { getGenreByIdController } from "../controllers/genre/getGenreIdController";
import { updateGenreController } from "../controllers/genre/updateGenreController";
import { deleteGenreController } from "../controllers/genre/deleteGenreController";

export async function genreRouter(app: Application) {
  app.post("/genres", createGenreControllers);

  app.get("/genres", getAllGenreController);

  app.get("/genres/:genreId", getGenreByIdController);

  app.put("/genres/:genreId", updateGenreController);

  app.delete("/genres/:genreId", deleteGenreController);
}
