import { Router } from "express";
import { AuthController } from "./controller/authController";

const authController= new AuthController()

const authRoute = Router()
authRoute.get("",authController.index.bind(authController))


export default authRoute;