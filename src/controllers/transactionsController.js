import modelsInit from "../models/init-models.js";
import { sequelize } from "../database/config.js";

const models = modelsInit(sequelize);
export const allTransactionTypes = async ( req,res)=>{
  try {
    const response = await models.transactions_type.findAll({});
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las transacciones." });
  }
}
export const transactionTypes = async (req,res)=>{
  const status = req.body
  try {
    const response = await models.transactions_type.create(status);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las transacciones." });
  }
}
export const adjustTransactionType = async (req, res)=>{
  let {id} = req.params
  try {
    const response = await models.transactions.update(req.body, {where:{id:id}});
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la transacción." });
  }
}
export const adjustTransaction = async (req, res) => {
  const patch = req.body;
  try {
    const response = await models.transactions.update(patch);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la transacción." });
  }
};

export const allTransactions = async ( req,res) => {
  try {
    const response = await models.transactions.findAll({});
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las transacciones." });
  }
};
export const getAllCollections = async (req, res) => {
  try {
    const collections = await models.Collection.findAll();
    res.status(200).json(collections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving collections." });
  }
};

export const createTransaction = async (req, res) => {
  const transaction = req.body;
  console.log(transaction);
  try {
    const response = await models.transactions.create(transaction);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la transacción." });
  }
};
