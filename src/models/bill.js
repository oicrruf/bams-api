import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;
import _sequelize, { DATE } from 'sequelize';

export default class bill extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_DATE'),
        },
        dueDate:  {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_DATE + INTERVAL 20 DAY'),
          },

          condo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "condominium",
              key: "id",
            },
          },
          subtotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "transactions",
              key: "amount",
            }
          },
          oneTime: {    
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "transactions",
              key: "amount",
            }
          },
        total: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "condominium",
        schema: "public",
        timestamps: true,
       
        indexes: [
          {
            name: "bill_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
