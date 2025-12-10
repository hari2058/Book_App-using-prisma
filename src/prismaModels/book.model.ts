import { BooksCreateInput } from "../controllers/books/createBooksController";
import { Prisma } from "../generated/prisma/client";
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
      genre_id: data.genre_id,
    },
  });
  return createdBooks;
}

export async function getAllBooks() {
  const allBooks = await prisma.books.findMany({
    include: {
      author: {
        select: {
          author_name: true,
          birth_date: true,
        },
      },
      genre: {
        select: {
          genre_title: true,
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

export async function updateBooksById(
  id: number,
  data: Prisma.booksUpdateInput
) {
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
