/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/


import { sequelize } from "./src/database/dbConfig";
async function main(){
  try{
    await sequelize.sync({force:false})
    await sequelize.authenticate()
    console.log('Conexion exitosa');
  }catch(error){
    console.log('Conexion fallida, error ->' + error);
  }
}

main()