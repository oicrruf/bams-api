import modelInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
import  asyncHandler  from 'express-async-handler'

let models = modelInit(sequelize)

const property = models.propety 

export const getProperty = asyncHandler( async (req, res) => {  
    let allProperties;
    try {   
        allProperties = await property.findAll()
    } catch (error) {
        console.error(error)
        res.status(500).json({"error": error})
    }   
    res.status(200).json(allProperties)
})

export const createProperty = asyncHandler( async(req, res) => {  

    const {condominium_id, propety_number} = req.body 
    
    if(!condominium_id || !propety_number){
        res.status(400)
        throw new Error ('Faltan datos')
    }

// crear condominio nuevo
    const depto = await property.create({
        condominium_id,
        propety_number
    })

    if (depto){
        res.status(201).json({
            id: depto.id,
            condominium_id: depto.condominium_id,
            propety_number: depto.propety_number,
            due_date: depto.due_date          
        })
    }else{n
        res.status(400)
        throw new Error('No se puede crear la propiedad')
    }
})

export const updateProperty = asyncHandler( async (req, res) => {   
    
    const deptos = await property.findByPk(req.params.id)

    if(!deptos) {
        res.status(400)
        throw new Error ('Este propiedad no existe')
    }

    const deptoUpdated = await property.update(req.body,{where:{id:req.params.id}})
    res.status(200).json(deptoUpdated)
})

export const deleteProperty = asyncHandler( async (req, res) => {     

    const depto = await property.findByPk(req.params.id)

    if(!depto) {
        res.status(400)
        throw new Error ('Esta propiedad no existe')
    }

    const deletedDepto = await property.destroy({where:{id:req.params.id}})
    res.status(200).json("Se borro exitosamente la propiedad id:" + req.params.id+ deletedDepto)
})