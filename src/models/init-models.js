import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _condominium from  "./condominium.js";
import _payment_status from  "./payment_status.js";
import _payment_type from  "./payment_type.js";
import _propety from  "./propety.js";
import _role from  "./role.js";
import _transactions from  "./transactions.js";
import _transactions_type from  "./transactions_type.js";
import _users from  "./users.js";
import _users_propety from  "./users_propety.js";

export default function initModels(sequelize) {
  const condominium = _condominium.init(sequelize, DataTypes);
  const payment_status = _payment_status.init(sequelize, DataTypes);
  const payment_type = _payment_type.init(sequelize, DataTypes);
  const propety = _propety.init(sequelize, DataTypes);
  const role = _role.init(sequelize, DataTypes);
  const transactions = _transactions.init(sequelize, DataTypes);
  const transactions_type = _transactions_type.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const users_propety = _users_propety.init(sequelize, DataTypes);

  propety.belongsTo(condominium, { as: "condominium", foreignKey: "condominium_id"});
  condominium.hasMany(propety, { as: "propeties", foreignKey: "condominium_id"});
  transactions.belongsTo(payment_status, { as: "payment_status", foreignKey: "payment_status_id"});
  payment_status.hasMany(transactions, { as: "transactions", foreignKey: "payment_status_id"});
  transactions.belongsTo(payment_type, { as: "payment_type", foreignKey: "payment_type_id"});
  payment_type.hasMany(transactions, { as: "transactions", foreignKey: "payment_type_id"});
  transactions.belongsTo(propety, { as: "propety", foreignKey: "propety_id"});
  propety.hasMany(transactions, { as: "transactions", foreignKey: "propety_id"});
  users_propety.belongsTo(propety, { as: "propety", foreignKey: "propety_id"});
  propety.hasMany(users_propety, { as: "users_propeties", foreignKey: "propety_id"});
  users.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(users, { as: "users", foreignKey: "role_id"});
  transactions.belongsTo(transactions_type, { as: "transaction_type", foreignKey: "transaction_type_id"});
  transactions_type.hasMany(transactions, { as: "transactions", foreignKey: "transaction_type_id"});
  condominium.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(condominium, { as: "condominia", foreignKey: "user_id"});
  users_propety.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(users_propety, { as: "users_propeties", foreignKey: "users_id"});

  return {
    condominium,
    payment_status,
    payment_type,
    propety,
    role,
    transactions,
    transactions_type,
    users,
    users_propety,
  };
}
