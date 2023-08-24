import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class payment_status extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payment_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
