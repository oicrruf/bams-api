import Sequelize from 'sequelize'
import colors from 'colors'

 export const sequelize = new Sequelize(
  'uluqgckh', // nombre de la base de datos 
  'uluqgckh', // nombre del usuario
  'RLnFlSUmuWTcWi9UKBzkjIbW2Fqu3HkG', //contraseña de la base de datos
  {
    host: 'mahmud.db.elephantsql.com',
    port: 5432,
    dialect: 'postgres'
  }   
)


