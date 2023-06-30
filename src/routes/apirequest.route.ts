import express from "express";
import {companyController} from "../controllers/company.controller";

let router = express.Router();

 router.get('/' ,(req, res, next) => {
  console.log('api rou');
  res.send("read router");
 });

 router.get('/readall' , companyController.getAll );
 router.get('/read/:id' , companyController.getById);
 router.post('/create' , companyController.create); 
 router.put('/update/:id' , companyController.update);
 router.delete('/delete/:id' , companyController.delete);

export {router} ;