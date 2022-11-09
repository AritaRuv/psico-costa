const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('paciente', {
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacimiento:{
      type: DataTypes.DATEONLY,
      allowNull:false
    },
    numero_telefono: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    consentimiento: {
      type: DataTypes.STRING,
    },
    contacto_alternativo:{
    type: DataTypes.INTEGER
    }    
  },{timestamps: false});
};
