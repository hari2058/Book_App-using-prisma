import { Application } from "express";
import { signUpUserController } from "../controllers/users/signupUserControllers";
import { getAllUserController } from "../controllers/users/getUserControllers";
import { getUserByIdController } from "../controllers/users/getUserByIdControllers";
import { updateUserController } from "../controllers/users/updateUserController";
import { deleteUserController } from "../controllers/users/deleteUserController";
import { logInUserController } from "../controllers/users/loginUserControllers";
import { getMeUserController } from "../controllers/users/getMeUserController";
import { userLogoutController } from "../controllers/users/userLogoutController";
import { generateAccessControlMiddleware } from "../middleware/generateAccessControllerMiddleware";
import { checkAuth } from "../middleware/checkAuth";

export async function UserRouter(app: Application) {
  //sign up
  app.post("/users/sign-up", signUpUserController);

  //login
  app.post("/users/login", logInUserController);

  //getme
  app.get(
    "/users/me",
    checkAuth,
    generateAccessControlMiddleware(["SUPER_ADMIN", "ADMIN", "USER"]),
    getMeUserController
  );

  //get all user
  app.get(
    "/users",
    checkAuth,
    generateAccessControlMiddleware(["SUPER_ADMIN"]),
    getAllUserController
  );

  //get user by id
  app.get(
    "/users/:userId",
    checkAuth,
    generateAccessControlMiddleware(["SUPER_ADMIN", "ADMIN", "USER"]),
    getUserByIdController
  );

  //update user by id
  app.put(
    "/users/:userId",
    checkAuth,
    generateAccessControlMiddleware(["SUPER_ADMIN", "ADMIN", "USER"]),
    updateUserController
  );

  //delete user by id
  app.delete(
    "/users/:userId",
    checkAuth,
    generateAccessControlMiddleware(["SUPER_ADMIN", "ADMIN", "USER"]),
    deleteUserController
  );

  // log out user
  app.post("/users/logout", checkAuth, userLogoutController);
}
