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
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacimiento:{
      type: DataTypes.DATE,
      allowNull:false
    },
    numeroTelefono: {
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
    contactoAlternativo:{
    type: DataTypes.INTEGER
    }

    
  },{timestamps: false});
};
