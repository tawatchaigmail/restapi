import  {Request, Response } from 'express';

import {getAll,getById,create,updateByid,deleteByid} from '../models/company.model';

  export const companyController : any = {

  getAll : async (req : Request, res : Response) => {
    try {
      console.log('getall');
      const companies : any = await getAll();

     if (companies) {
   //   res.status(200).json({data : companies})  ;
        res.json(companies);
   //   res.send(companies);

      }
      else{
       res.status(300).json({message: "Record not found"});
      }
 
    } catch (err) {

      res.status(500).json({message: "Error get data ", error: err})
      console.log(err);
    } 
  },
 
  getById : async (req : Request, res : Response) => {
    try {
      console.log(req.params.id);
      const companie : any = await getById(req.params.id);
      if (companie) {
      res.json(companie);
   //   res.send(companie);

   //    res.status(200).jso({ data : companie} )  
      }
      else{
       res.status(300).json({message: "Record not found"});
      }
      
    } catch (err) {

      res.status(500).json({message: "Error get data ", error: err})
      console.log(err);
    }
  },

  create : async (req : Request, res : Response) => {
    try {
      const companie = await create(req.body);
     if (companie) {
       // res.status(200).json({updated: companie})
       res.json(companie);   
     } else {
       res.status(404).json({message: " Cant 't Creaete Record "})
     }
      
    } catch (err) {
      res.status(500).json({message: "Error create Recore", error: err})
      console.log(err);
    }
  },

  update : async (req : Request, res : Response) => {
    try {
      const companie = await updateByid(req.params.id, req.body);

      if (companie) {
      //  res.status(200).json({updated: companie})
        res.json(companie);   
      } else {
        res.status(404).json({message: "Record not found"})
      }      
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
      console.log(err);
    }
  },
    delete : async (req : Request, res : Response) => {
    try {
      const companie = await deleteByid(req.params.id);
      if (companie) {
     //  res.status(200).json({delete: companie})
       res.json(companie);   
      } else {
        res.status(404).json({message: "Record not found"});
      }        
    } catch (err) {
      
      res.status(500).json({message: "Error delete", error: err});
      console.log(err);
    }
  }


}