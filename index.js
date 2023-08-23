import express from 'express'
import { sequelize } from "./src/database/config.js"
async function main(){
  try{
    await sequelize.sync({force:false})
    await sequelize.authenticate()
    console.log('Conexion exitosa:' .cyan.underline);
  }catch(error){
    console.log('Conexion fallida, error ->' + error);
  }
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.listen(3000)
  console.log('El servidor esta escuchando')
}

main()
