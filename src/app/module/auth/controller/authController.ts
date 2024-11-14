import { Request, Response } from 'express';
import { UserSession } from '../types/types';
import { AuthService } from '../services/auth.service';

  declare module "express-session" {
    interface SessionData {
      user: UserSession;
    }
  }
export class AuthController {
    constructor(
        private readonly authService: AuthService,
      
        
      ) {
        console.log('ClassService authService - authService:', this.authService);
       
     }

    async index(req: Request, res: Response,) {
        try {
            res.render("auth/auth-login-cover", {
                error: req.flash("error"),
                warning: req.flash("warning"),
                sucess: req.flash("sucess"),
            })
        } catch (error) {
            console.log(error);

        }
    }

    async  signIn(req: Request, res: Response) {  
        try {  
          const { username, password } = req.body;  
      
          const user = await this.authService.authenticateUser(username, password);  
      
          if (user) {  
            const userSession:UserSession ={
                id: user.id,
                username: user.username,
                imagenName: user.imagenName,
                email: user.email
            }
             await this.authService.createSessionToken(userSession,req);  
      
            res.redirect('/dashboard');  
          } else {  
            req.flash("error", "Senha Incorrecta !");
            res.redirect("/");
          }  
        } catch (error) {  
          console.error(error);  
          res.status(500).json({ error: 'Ocorreu um erro ' });  
        }  
      }  
      async  signOut(req: Request, res: Response) {  
        try {  
           
        await this.authService.sigOut(req);  
          res.redirect('/');   
        } catch (error) {  
          console.error(error);  
          res.status(500).json({ error: 'Ocorreu um erro ' });  
        }  
      } 
      
    


}