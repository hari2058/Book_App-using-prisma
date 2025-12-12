import { Prisma } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";

export async function createAuthors(data: Prisma.authorsCreateInput) {
  const createdAuthors = await prisma.authors.create({
    data: {
      author_name: data.author_name,
      birth_date: data.birth_date,
      died: data.died || null,
      bio: data.bio || null,
    },
  });
  return createdAuthors;
}

export async function getAllAuthors(whereInput: {
  author_name?: string;
  birth_Date?: string;
}) {
  let tempWhereInput: Prisma.authorsWhereInput = {
    OR:[

    ]
  };

  if (whereInput.author_name) {
    tempWhereInput.OR?.push({author_name: whereInput.author_name})
  }

  if (whereInput.birth_Date) {
     tempWhereInput.OR?.push({birth_date: whereInput.birth_Date});
  }

  const authorsData = await prisma.authors.findMany({
    where: tempWhereInput,
    include: {
      books: {
        select: {
          title: true,
          status: true,
        },
      },
    },
  });

  return authorsData;
}

export async function getAuthorById(id: number) {
  const author = await prisma.authors.findFirst({
    where: {
      id,
    },
  });

  if (!author) {
    throw new Error(`Author not found by id-${id}`);
  }

  return author;
}

export async function updateAuthor(
  id: number,
  data: Prisma.authorsUpdateInput
) {
  const updatedAuthor = await prisma.authors.update({
    where: {
      id,
    },

    data: data,
  });

  return updatedAuthor;
}

export async function deleteAuthor(id: number) {
  const deletedAuthorData = await prisma.authors.delete({
    where: {
      id,
    },
  });

  return deletedAuthorData;
}
