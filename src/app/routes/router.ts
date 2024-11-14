import { Router } from 'express';
import {userAuth} from '../util/middlewares/session'
import authRoute from '../module/auth/routes';
import dashRoute from '../module/dashboard/main/routes/dashboard.routes';


const routes = Router()

routes.use('/',authRoute)
routes.use('/dashboard',dashRoute)




export {routes};