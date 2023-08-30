import modelsInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
let models = modelsInit(sequelize)

export const getRole = async(req,res) => {
  let response
  try {
    response = await models.role.findAll()
  } catch (error) {
    console.log(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}

export const createRole = async(req,res) => {
  let { type } = req.body
  let response = null
  try {
    response = await models.role.create({
     type
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}

export const changeRole = async(req,res) => {
  let response 
  let {id} = req.params
  try {
    response = await models.role.update(req.body,{where:{id:id}})
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}
export const deleteRole = async(req,res) => {
  let response = null
  let {id} = req.params.id
  
  try {
    response = await models.role.destroy({where:{id}})
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}
