import express from 'express'
import { sequelize } from "./src/database/config.js"
import { errorHandler } from './src/middleware/errorMiddleware.js'
import routeUsers from './src/routes/usersRoutes.js'
import routeCondo from './src/routes/condoRoutes.js'
import routesProperty from './src/routes/propertyRoutes.js'
import routeRole from './src/routes/roleRoutes.js'
import transactionRoutes from './src/routes/transactionsRoutes.js'
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
app.use(routeUsers)
app.use(routeCondo)
app.use(routesProperty)
app.use(routeRole)
app.use(transactionRoutes)
app.use(errorHandler)

app.listen(3000)
  console.log('El servidor esta escuchando')
}
main()