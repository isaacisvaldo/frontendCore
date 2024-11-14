import { Router } from "express";
import { DashboardController } from "../controllers/dashboardController";


const dashboardController= new DashboardController()

const dashRoute = Router()
dashRoute.get("",dashboardController.dashboard.bind(dashboardController))

export default dashRoute;