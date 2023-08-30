import modelsInit from '../models/init-models.js'
import { sequelize } from '../database/config.js'
let models = modelsInit(sequelize)



import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import  asyncHandler  from 'express-async-handler'


//registrarse
const User = models.users

export const registerUser = asyncHandler( async (req, res) =>{
  const {name, lastname, email, password, phone, role_id } = req.body

  if (!name || !lastname || !email || !password || !phone || !role_id ){
    res.status(400)
    throw new Error ('Falta datos')
  }

  //verficar que el usuario existe
  const userExist = await User.findOne(
    {where: {email: req.body.email}})
  if (userExist){
    res.status(400)
    throw new Error ('ese usario ya existe')
  }

  //HAsh al password
  const salt = await bcrypt.genSalt(10)   
  const hashedPassword = await bcrypt.hash(password, salt)

  //Crear el usuario
  const user = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword,
      phone, 
      role_id
  })

  if(user){
    res.status(201).json({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      phone: user.phone
    })
  }else{
    res.status(400)
    throw new Error ('No se pudo crear usuario')
  }
})


//LOG IN
export const loginUser = asyncHandler(async (req, res) =>{
  const { email, password } = req.body

  //verificar que el usuario existe
  const user = await User.findOne(
    {where: {email: req.body.email}})

    if(user && (await bcrypt.compare(password, user.password))){
      res.status(200).json({
       
        token: generateToken({ id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,})
      })
    }else{
      res.status(400)
      throw new Error('Credenciales incorrectas')
    }
})

//Generar token
export const generateToken = (dataUser) => {
  return jwt.sign( dataUser , process.env.JWT_SECRET,{
      expiresIn: '30m'
  })
}


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
  let response 
  let {id} = req.params
  try {
    response = await models.users.update(req.body,{where:{id:id}})
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}
export const deleteUsers = async(req,res) => {
  let response = null
  let {id} = req.params
  
  try {
    response = await models.users.destroy({where:{id}})
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": error})
  }
  res.status(200).json(response)
}
