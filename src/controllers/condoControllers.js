import modelInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
import  asyncHandler  from 'express-async-handler'

let models = modelInit(sequelize)
const condos = models.condominium

export const getCondos = asyncHandler( async (req, res) => {  
    let response;
    try {   
        response = await condos.findAll()
    } catch (error) {
        console.error(error)
        res.status(500).json({"error": error})
    }   
    res.status(200).json(response)
})

export const createCondos = asyncHandler( async(req, res) => {  

    const {name, address, city, state, postal_code, user_id } = req.body 
    
    if(!name || !address || !city || !state || !postal_code){
        res.status(400)
        throw new Error ('Faltan datos')
    }

// crear condominio nuevo
    const condo = await condos.create({
        name,
        address,
        city,
        state,
        postal_code,
        user_id
    })

    if (condo){
        res.status(201).json({
            id: condo.id,
            name: condo.name,
            address: condo.address,
            city: condo.city,
            state: condo.state,
            postal_code: condo.postal_code,
            user_id: condo.user_id            
        })
    }else{
        res.status(400)
        throw new Error('No se puede crear el condominio')
    }
})

export const updateCondos = asyncHandler( async (req, res) => {   
    
    const condo = await condos.findByPk(req.params.id)

    if(!condo) {
        res.status(400)
        throw new Error ('Este condominio no existe')
    }

    const condoUpdated = await condo.update(req.body,{where:{id:req.params.id}})
    res.status(200).json(condoUpdated)
})

export const deleteCondos = asyncHandler( async (req, res) => {     

    const condo = await condos.findByPk(req.params.id)

    if(!condo) {
        res.status(400)
        throw new Error ('Este condominio no existe')
    }

    const deletedCondos = await condos.destroy({where:{id:req.params.id}})
    res.status(200).json("Se borro exitosamente el condominio id:" + req.params.id+ deletedCondos)
})
