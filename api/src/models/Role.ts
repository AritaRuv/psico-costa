import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize' // Asegúrate de importar tu instancia de Sequelize

class Role extends Model {
  public ID_Role!: number;
  public roleName!: string;
  // Otras propiedades y métodos del modelo si las hay
}
Role.init(
  {
    ID_Role: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    roleName: {
      type: DataTypes.ENUM,
      values: ['admin','recepcionist','professinal','patient'],
      allowNull: false
    }
  },
    {
      sequelize,
      modelName: 'Role'
    }
  );
  
  export default Role;