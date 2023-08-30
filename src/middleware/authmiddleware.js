import modelsInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
let models = modelsInit(sequelize)

import jwt from 'jsonwebtoken'
import  asyncHandler  from 'express-async-handler'

export const protect = asyncHandler( async(req, res, next) =>{
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await models.users.findByPk(decoded.id)

            next ()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ('Acceso no autorizado')
        }
    }

    if (!token){
        res.status(401)
        throw new Error ('Acceso no autorizado, falta token')
    }
})