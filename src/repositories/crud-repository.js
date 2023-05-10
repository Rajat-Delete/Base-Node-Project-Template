//We will try to make a generic crud repo inspite of making crud for every models.

const { Logger }= require('../config');

class CrudRespository {

    constructor(model){
        this.model=model;

    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }
        catch(error){
            Logger.error('Something went wrong in crud repo: create function');
            throw error; //throwing it to handle better at service layer
        }

    }


    async destroy(data){
        try{
            const response = this.model.destroy({
            where:{
                id: data
            }
        })
        }catch(error){
            Logger.error('Something went wrong in crud repo: destroy function');
            throw error;
        }
        

    }

    //this is for finding a unique tuple
    async get(data){
        try{
            const response = this.model.findByPK(data);
            return response;
        }catch(error){
            Logger.error('Something went wrong in crud Repo : get function');
            throw error;
        }
    }

    //this is for getting all the data from the table
    async getAll(){
        try{
            const response = this.model.findAll();
            return response;
        }
        catch(error){
            Logger.error('Something went wrong in crud repo : getAll function');
            throw error;
        }
        
    }

    async update(id, data){ //data ->{col: value,....}
        try{
            const response = this.model.update(data, {
                    where :{
                        id : id
                    }
            })
            return response;
        }
        catch(error){
            Logger.error('Something went wrong in crud repo : update function');
            throw error;
        }
    }
} 


module.exports = CrudRespository;