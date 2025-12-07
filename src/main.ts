import express from "express";
import { booksRouter } from "./Router/books.router";
import { authorsRouter } from "./Router/authors.router";
import { UserRouter } from "./Router/user.router";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello from express",
  });
});

booksRouter(app);
authorsRouter(app);
UserRouter(app);

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
