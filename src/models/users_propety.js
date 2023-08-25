import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_propety extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    propety_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'propety',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_propety',
    schema: 'public',
    timestamps: false
  });
  }
}
