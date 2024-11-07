import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { routes } from "./app/routes/router";
import session, { SessionOptions } from 'express-session';
import flash from "express-flash"
const path = require('path');
import cors from "cors";
config();
const main = async () => {
  const app = express();
  app.use(flash());
  app.use(
    session({
      secret: process.env.SESSION_PASSWORD || "Testando@##123",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure:false,
        maxAge: 60 * 60 * 1000, 
      },
    } as SessionOptions));
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use('/public', express.static(path.join(__dirname, 'public')));
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(routes);
  app.use(function  (req,res,next){
   
    
    res.json({Message:'Rota Não Mapeado na App'})
}) 
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Rodadndo http://localhost:${port}`));
};
main();
