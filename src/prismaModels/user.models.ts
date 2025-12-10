import { TLoginUserSchema } from "../controllers/users/loginUserControllers";
import { TSignUpUserSchema } from "../controllers/users/signupUserControllers";
import { TUpdateUserSchema } from "../controllers/users/updateUserController";
import { prisma } from "../lib/prisma";

export async function signUpUser(data: TSignUpUserSchema) {
  // this is to check of username and email already exists in database and if they exists
  //instruct users to use other username and email
  // these fields are also unique in database so to prevent from bug we have to check

  const userFound = await prisma.users.findFirst({
    where: {
      OR: [
        {
          email: data.email,
        },
        {
          username: data.username,
        },
      ],
    },
  });

  if (userFound) {
    throw new Error(` User alerady exists.`);
  }

  const createdUser = await prisma.users.create({
    data: {
      username: data.username,
      email: data.email,
      gender: data.gender,
      password: data.password,
    },
  });
  return createdUser;
}

export async function loginUser(data: TLoginUserSchema) {
  const userFound = await prisma.users.findFirst({
    where: {
      username: data.username,
    },
  });

  if (!userFound) {
    throw new Error(`User not found, please register.`);
  }

  if (data.password !== userFound.password) {
    throw new Error(`Invalid username or password!`);
  }
  return userFound;
}

export async function getAllUsers() {
  const allUsers = await prisma.users.findMany();

  return allUsers;
}

export async function getUsersById(id: number) {
  const userById = await prisma.users.findFirst({
    where: {
      id,
    },
  });

  if (!userById) {
    throw new Error(`User not found.`);
  }
  return userById;
}

export async function updateUser(id: number, data: TUpdateUserSchema) {
  const userFound = await getUsersById(id);
  const updatedUser = await prisma.users.update({
    where: {
      id: userFound.id,
    },
    data: {
      username: data.username || userFound.username,
      email: data.email || userFound.email,
      password: data.password || userFound.password,
      gender: data.gender || userFound.gender,
    },
  });
  return updatedUser;
}

export async function deleteUser(id: number) {
  const userFound = await getUsersById(id);
  const deletedUser = await prisma.users.delete({
    where: {
      id: userFound.id,
    },
  });

  return deletedUser;
}


