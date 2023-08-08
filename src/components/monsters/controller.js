const { respuesta_envio_api } = require("../../utils/error");
const modelo_dao = require("./dao");

async function listar_usuarios(valores_datos, valores_usuario) {
    try {
        const resultado = await modelo_dao.listar_usuarios(valores_datos);
        console.log(resultado);
        return respuesta_envio_api(true, "SUCCESS", "Se procesó correctamente", resultado);
    } catch (err) {
        throw new Error(err);
    }
}
module.exports = {
    async listar_usuarios(req,res){
        try {
            const valores_datos = req;
            console.log(valores_datos.query,  "<-----"); 

                 //const valores_usuario = req.user;

            const info = await listar_usuarios(valores_datos);
            return res.json(info);

        } catch (err) {
            info = {
                "bEstado": false,
                "iCodigo": 0,
                "sRpta": err.message,
                "obj": []
              }
            console.log('[response error]', err.message);
            return res.status(500).send(info);
        }
    },
}