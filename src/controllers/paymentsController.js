import modelsInit from "../models/init-models.js";
import { sequelize } from "../database/config.js";

const models = modelsInit(sequelize);
export const allPaymentTypes = async ( req,res)=>{
  try {
    const response = await models.payment_type.findAll({});
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las transacciones." });
  }
}
export const createPaymentType = async (req,res)=>{
  const status = req.body
  try {
    const response = await models.payment_type.create(status);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las transacciones." });
  }
}


export const allPaymentStatus = async ( req,res) => {
  try {
    const response = await models.payment_status.findAll({});
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las transacciones." });
  }
};

export const createPaymentStatus = async (req, res) => {
  const transaction = req.body;
  console.log(transaction);
  try {
    const response = await models.payment_status.create(transaction);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la transacción." });
  }
};
