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
import { checkAuth, checkRefreshToken } from "../middleware/checkAuth";
import { refreshTokenController } from "../controllers/users/refreshTokenController";

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

  app.get("/users/refresh-token", checkRefreshToken, refreshTokenController);

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
