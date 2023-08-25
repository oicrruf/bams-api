import modelsInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
let models = modelsInit(sequelize)

export const getUsers = async(req,res) => {
  let response
  try {
    response = await models.users.findAll()
  } catch (error) {
    console.log(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}

export const createUsers = async(req,res) => {
  let { name, lastname, email, password, phone, role_id } = req.body
  let response = null
  try {
    response = await models.users.create({
      name,
      lastname,
      email,
      password,
      phone, 
      role_id
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}

export const changeUsers = async(req,res) => {
  let response = null
  let {id} = req.params
  
  try {
    response = await models.users.update(req.body,{where:{id_users:id}})
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}
export const deleteUsers = async(req,res) => {
  let response = null
  let {id_users} = req.params
  
  try {
    response = await models.users.destroy({where:{id_users:id}})
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}
