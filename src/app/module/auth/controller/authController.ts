import { Request, Response } from 'express';

export class AuthController {

    async index(req: Request, res: Response, ){
        try {
            res.render("auth/auth-login-cover")
        } catch (error) {
           console.log(error);
            
        }
    }
   
    
    
    
}