/**
 * Required External Modules
 */


import * as dotenv from "dotenv";

import express , {Application} from "express";
/* import http from "http"; */
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import {router} from "./routes/apirequest.route";

dotenv.config();


/**
 * App Variables
 */

console.log(' env port '+process.env.PORT);

if (!process.env.PORT) {
   process.exit(1);
}

/*
 const PORT: number = parseInt(process.env.PORT as string, 10);
*/
const PORT: number = 3002;

const app : Application = express();

/**
 *  App Configuration
 */


app.use(compression());
app.use(cookieParser());
app.use(cors({
      credentials : true 
             }));
app.use(bodyParser.json());


/**
 * Server Activation
 */

app.get('/',(req,res,next) => {
   console.log('Home page');       
   res.send('Home Page  ');
});

 app.use('/api',router);

app.use('/add',(req,res)=>{
   console.log('add page');
   res.send(' add page');
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});