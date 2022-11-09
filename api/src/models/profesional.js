const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('profesional', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    matricula: {
      type: DataTypes.STRING ,
      allowNull: false,
    },
    tarifa: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{timestamps: false});
};
