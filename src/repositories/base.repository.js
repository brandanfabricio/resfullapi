class BaseRepository {
    constructor(model){
        this.model = model; 
    }
    //m mostras filtro por id
    async get(id){
        return await this.model.findById(id);
    }
    //mostrar todo
    async getAll(){
        return await this.model.find();
    }
    //crear eleento
    async create(entity){
        return await this.model.create(entity);
    }
    //actualizar elemento
    async update(id,entity){
        return await this.model.findByAndUpdate(id,entity,{new: true});
    }
    //borrar elemet
    async delete(id){
        return await this.model.fineByIdAndDelete(id);
    }

}

module.exports = BaseRepository;