import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize'; 

class HealthInsurance extends Model {
  public ID_healthInsurance!: number;
  public name!: string;
  public email!: string;
  public socialNumber!: number;
}

HealthInsurance.init(
  {
    ID_healthInsurance: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    socialNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false,
      validate: {
        isEmail: true, 
      }
    }
  },
  {
    sequelize,
    modelName: 'HealthInsurance'
  }
);

export default HealthInsurance;
