import { Application } from "express";
import { createAuthorsControllers } from "../controllers/authors/createAuthorsController";
import { getAllAuthorsControllers } from "../controllers/authors/getAllAuthorsController";
import { getAuthorByIdControllers } from "../controllers/authors/getAuthorsByIdController";
import { updateAuthorsControllers } from "../controllers/authors/updateAuthorsController";
import { deleteAuthorsControllers } from "../controllers/authors/deleteAuthorsController";

export async function authorsRouter(app: Application) {
  app.post("/authors", createAuthorsControllers);

  app.get("/authors", getAllAuthorsControllers);

  app.get("/authors/:authorId", getAuthorByIdControllers);

  app.put("/authors/:authorId", updateAuthorsControllers);

  app.delete("/authors/:authorId", deleteAuthorsControllers);
}
