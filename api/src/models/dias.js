const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dias', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    profesional_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lunes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    martes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    miercoles: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jueves: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    viernes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },{timestamps: false});
};
