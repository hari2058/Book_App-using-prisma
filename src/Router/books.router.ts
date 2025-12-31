import { Application } from "express";
import { createBooksControllers } from "../controllers/books/createBooksController";
import { getAllBooksControllers } from "../controllers/books/getAllBooksControllers";
import { getBookByIdControllers } from "../controllers/books/getBookByIdControllers";
import { updateBooksControllers } from "../controllers/books/updateBooksControllers";
import { deleteBookControllers } from "../controllers/books/deleteBookControllers";
import rateLimit from "express-rate-limit";

export async function booksRouter(app: Application) {
  app.post("/books", rateLimit, createBooksControllers);

  app.get("/books", getAllBooksControllers, rateLimit);

  app.get("/books/:bookId",rateLimit, getBookByIdControllers);

  app.put("/books/:bookId", updateBooksControllers);

  app.delete("/books/:bookId", deleteBookControllers);
}
