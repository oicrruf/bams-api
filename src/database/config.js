import Sequelize from "sequelize";

// export const sequelize = new Sequelize(
//   process.env.NAME_DB, // nombre de la base de datos
//   process.env.USER_DB, // nombre del usuario
//   process.env.PASSWORD_DB, //contraseña de la base de datos
//   {
//     host: process.env.HOST_DB,
//     port: process.env.PORT_DB,
//     dialect: "postgres",
//   }
// );
export const sequelize = new Sequelize(
  "postgres://bams:KpQRu2UAsbm0ObySXY67LgiNLJ2DvYAl@dpg-cjojkl36fquc73d6rtdg-a.oregon-postgres.render.com/bams",
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: { native: true, ssl: true },
  }
);
