import { Application } from "express";
import { signUpUserController } from "../controllers/users/signupUserControllers";
import { getAllUserController } from "../controllers/users/getUserControllers";
import { getUserByIdController } from "../controllers/users/getUserByIdControllers";
import { updateUserController } from "../controllers/users/updateUserController";
import { deleteUserController } from "../controllers/users/deleteUserController";
import { logInUserController } from "../controllers/users/loginUserControllers";
import { getMeUserController } from "../controllers/users/getMeUserController";
import { userLogoutController } from "../controllers/users/userLogoutController";

export async function UserRouter(app: Application) {
  //sign up
  app.post("/users/sign-up", signUpUserController);

  //login
  app.post("/users/login", logInUserController);

  //login/me
  app.get("/users/me", getMeUserController);

  //get all user
  app.get("/users", getAllUserController);

  //get user by id
  app.get("/users/:userId", getUserByIdController);

  //update user by id
  app.put("/users/:userId", updateUserController);

  //delete user by id
  app.delete("/users/:userId", deleteUserController);

  // log out user
  app.post("/users/logout", userLogoutController);
  
}
