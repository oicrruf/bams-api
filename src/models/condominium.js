import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class condominium extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postal_code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    update_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'condominium',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "condominium_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
