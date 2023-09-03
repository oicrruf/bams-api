import modelsInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
let models = modelsInit(sequelize)



export const submitCredit = async (res,req) =>{

}
export const submitCharge = async (res,req) =>{

}
export const makePayment = async (res,req) =>{

}
export const uploadBill = async (res,req) =>{
    try {
      await models.bill.create(req.body)
    } catch (error) {
      console.error(error);
      res.status(500).json({"error": error})
    }
    
    res.status(201).json(response)
}
export const addToBill = async (res,req) =>{

}
export const postBill = async (res,req) =>{

}
export const savePaymentMethod = async (res,req) =>{

}
export const takePayment = async (res,req) =>{

}