import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class payment_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payment_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
