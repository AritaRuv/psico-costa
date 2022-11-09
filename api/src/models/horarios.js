const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('horarios', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    hora_inicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hora_fin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    min_sesion  : {
      type: DataTypes.INTEGER ,
      allowNull: false,
    }
  },{timestamps: false});
};
