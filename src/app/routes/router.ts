import { Router } from 'express';
import {userAuth} from '../util/middlewares/session'
import authRoute from '../module/auth/routes';


const routes = Router()

routes.use('/',authRoute)




export {routes};