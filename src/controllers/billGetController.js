import modelsInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
import { where } from 'sequelize'
let models = modelsInit(sequelize)

export const viewBill = async (res,req) =>{

    let response
    try {
      response = await models.users.findOne()
    } catch (error) {
      console.log(error);
      res.status(500).json({"error": error})
    }
    res.status(200).json(response)
} 
export const billingHistory = async (res,req) =>{
  let response
  try {
    response = await models.bill.findAll()
  } catch (error) {
    console.log(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
} 
export const paymentHistory = async (res,req) =>{

} 
export const paymentArrangement = async (res,req) =>{

} 
export const viewCredits = async (res,req) =>{

} 
export const viewCharges = async (res,req) =>{

} 
export const movementHistory = async (res,req) =>{

} 