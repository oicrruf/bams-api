import modelInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'

let models = modelInit(sequelize)

export const getCondos = async (req, res) => {  
    let response;
    try {   
        response = await models.condominium.findAll()
    } catch (error) {
        console.error(error)
        res.status(500).json({"error": error})
    }   
    res.status(200).json(response)
}

export const createCondos = (req, res) => {     
    res.status(200).json({"respuesta":"se creo"})
}

export const updateCondos = (req, res) => {     
    res.status(200).json({"respuesta":"se actualizo"})
}
