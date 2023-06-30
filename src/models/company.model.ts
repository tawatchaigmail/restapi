import knex from "../config/knexts";

/*
knex.select().from("COMPANIES").asCallback(function(err, rows){
    if(err)
        console.log(err);
    else
        console.table(rows);
});

*/


// export const companyModel : any = {

let getAll = async () =>{
   console.log('model getall');   

   let data : any = await knex('COMPANIES').select();
    
  //  console.log(data); 

    return data ;
 }


let getById =  async (param : any) =>{
   console.log('model getbyid');   
   let data : any = await knex('COMPANIES').where({COMPANY : param}).select();
    
 //   console.log(data); 

    return data ;
 }
                           let create = async (param : any) => {
                                             try {
                                                 console.log('function create');
                                                 const company = await knex("COMPANIES").insert(param);
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e);
                                                 }      
                                             }

                          let updateByid = async (id : any, param : any) => {
                                             try {
                                                 console.log('function create');
                                                 
                                                 const company = await knex("COMPANIES").where("COMPANY", id).update(param);
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e);
                                                 }      
                                            }
                            
                          let deleteByid = async (param : any) => {
                                                 try {
                                                 const company = await knex("COMPANIES").where("COMPANY", param).del();
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e);
                                                 }      
                                             }
                          

// }
  export {getAll,getById,create,updateByid,deleteByid};