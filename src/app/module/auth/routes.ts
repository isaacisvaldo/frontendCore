import { Router } from "express";
import { AuthController } from "./controller/authController";
import { AuthService } from "./services/auth.service";


const authService = new AuthService()
const authController= new AuthController(authService)
const authRoute = Router()
authRoute.get("",authController.index.bind(authController))
authRoute.post("/signIn",authController.signIn.bind(authController))
authRoute.get("/signOut",authController.signOut.bind(authController))


export default authRoute;