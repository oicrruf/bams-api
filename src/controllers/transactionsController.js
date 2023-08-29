import modelsInit from "../models/init-models.js";
import { sequelize } from "../database/config.js";
let models = modelsInit(sequelize);

export const adjustTransaction = async () => {
    let response;
    const patch = req.body
  try {
    response = await models.transactions.update(patch);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
  res.status(200).json(response);
};
export const allTransactions = async(req,res) => {
    let response
    try {
      response = await models.transactions.findAll({})
    } catch (error) {
      console.log(error);
      res.status(500).json({"error": error})
    }
    res.status(200).json(response)
  }
export const createTransaction = async (req, res) => {
  const transaction = req.body;
  let response;
  try {
     response = await models.transactions.create(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
  res.status(200).json(response);
};
