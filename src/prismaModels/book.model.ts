import { BooksCreateInput } from "../controllers/books/createBooksController";
import { UpdateBooksInput } from "../controllers/books/updateBooksControllers";
import { Prisma } from "../generated/prisma/client";
import { BookStatus } from "../generated/prisma/enums";
import { prisma } from "../lib/prisma";

export async function createBooks(data: BooksCreateInput) {
  const createdBooks = await prisma.books.create({
    data: {
      title: data.title,
      description: data.description || null,
      language: data.language,
      status: data.status ?? null,
      completed_at: data.completed_at ? new Date(data.completed_at) : null,
      published_date: data.published_date
        ? new Date(data.published_date)
        : null,
      author_id: data.author_id,
      genreId: data.genreId,
    },
  });
  return createdBooks;
}

export async function getAllBooks(whereInput: {
  status?: BookStatus;
  author_id?: number;
  genreId?: number;
}) {
  let tempWhereInput: Prisma.booksWhereInput = {};

  if (whereInput.status) {
    tempWhereInput.status = whereInput.status;
  }
  if (whereInput.author_id) {
    tempWhereInput.author_id = whereInput.author_id;
  }

  if (whereInput.genreId) {
    tempWhereInput.genreId = whereInput.genreId;
  }

  // if (whereInput.status) {
  //   tempWhereInput.status = whereInput.status;

  //   const authorFound = await prisma.books.findFirst({
  //     where: {
  //       status: whereInput.status,
  //     },
  //   });
  //   if (!authorFound) {
  //     throw new Error(`Book not found by status-${whereInput.status}`);
  //   }
  // }

  // if (whereInput.author_id) {
  //   tempWhereInput.author_id = whereInput.author_id;

  //   const authorFound = await prisma.books.findFirst({
  //     where: {
  //       author_id: whereInput.author_id,
  //     },
  //   });
  //   if (!authorFound) {
  //     throw new Error(`Book not found by author_id-${whereInput.author_id}`);
  //   }
  // }
  // if (whereInput.genreId) {
  //   tempWhereInput.genreId = whereInput.genreId;

  //   const authorFound = await prisma.books.findFirst({
  //     where: {
  //       genreId: whereInput.genreId,
  //     },
  //   });
  //   if (!authorFound) {
  //     throw new Error(`Book not found by genreId-${whereInput.genreId}`);
  //   }
  // }

  const allBooks = await prisma.books.findMany({
    where: tempWhereInput,
    include: {
      author: {
        select: {
          author_name: true,
          birth_date: true,
          bio: true,
          died: true,
        },
      },
      genre: {
        select: {
          genre_title: true,
          description: true,
        },
      },
    },
  });

  return allBooks;
}

export async function getBooksById(id: number) {
  const books = await prisma.books.findFirst({
    where: {
      id,
    },
  });

  if (!books) {
    throw new Error(`Book not found by id-${id}`);
  }

  return books;
}

export async function updateBooksById(id: number, data: UpdateBooksInput) {
  const updatedBook = await prisma.books.update({
    where: {
      id,
    },
    data: data,
  });
  return updatedBook;
}

export async function deleteBooks(id: number) {
  const bookFound = await prisma.books.findFirst({
    where: {
      id,
    },
  });

  if (!bookFound) {
    throw new Error(`Book not found by id-${id}`);
  }

  const deletedBook = await prisma.books.delete({
    where: {
      id,
    },
  });
  return deletedBook;
}
