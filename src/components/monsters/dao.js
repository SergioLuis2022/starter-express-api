const { usuariosModel } = require("../monsters/model");

module.exports = {
    async listar_usuarios(datos_buscar){
        try{
            const response = await usuariosModel.find().lean()
            return response;
        }catch(err){
            throw new Error(err);
        }
    }
}
