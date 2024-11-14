import { UserSession } from "../types/types";

 
   export class AuthService {    
    async  authenticateUser(username: string, password: string) {  
        const users = [  
            { id: '1', username: 'john_doe', password: '123456',imagenName:'user.png',email:'' },  
            { id: '2', username: 'jane_smith', password: 'secretpassword',imagenName:'user.png',email:'' },  
            { id: '3', username: 'admin', password: 'adminpassword',imagenName:'user.png',email:'' },  
          ]; 
        // Procura o usuário no array com base no username  
        const user = users.find(  
          (u) => u.username === username && u.password === password  
        );  
      
        return user || null;  
      }  
      async  createSessionToken(user: UserSession, req: any) {  
        // Assuming you have a 'user' object with the necessary information  
        req.session.user = {  
          id: user.id,  
          username: user.username,  
          imagenName: user.imagenName,  
          email: user.email  
        };  
     
    }
    async sigOut(req:any){
        req.session.destroy;
        req.session.user = undefined;
    }
}