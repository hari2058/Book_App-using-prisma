import { CreateGenreInputs } from "../controllers/genre/createGenreController";
import { prisma } from "../lib/prisma";

export async function createGenre(data: CreateGenreInputs) {
  const createdGenre = await prisma.genre.create({
    data: {
      genre_title: data.genre_title,
      description: data.description,
    },
  });

  return createdGenre;
}

export async function getAllGenre() {
  const allGenre = await prisma.genre.findMany();

  return allGenre;
}

export async function getGenreById(id: number) {
  const genreData = await prisma.genre.findFirst({
    where: {
      id,
    },
  });

  if (!genreData) {
    throw new Error(`Genre not found by id-${id}`);
  }
  return genreData;
}

export async function updateGenre(id: number, data: CreateGenreInputs) {
  const genreFound = await getGenreById(id);

  // const allGenre = await getAllGenre();
  const genreTitleFound = await prisma.genre.findFirst({
    where: {
      genre_title: data.genre_title,
    },
  });
  if (genreTitleFound) {
    throw new Error(`Genre already exists.`);
  }

  const updatedGenre = prisma.genre.update({
    where: {
      id,
    },
    data: {
      genre_title: data.genre_title || genreFound.genre_title,
      description: data.description || genreFound.description,
    },
  });
  return updatedGenre;
}

export async function deleteGenre(id: number) {
  const userFound = await getGenreById(id);
  

  const deletedGenre = await prisma.genre.delete({
    where: {
      id: userFound.id,
    },
  });

  return deletedGenre;
}
