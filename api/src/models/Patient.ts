import { DataTypes, DateOnlyDataType, Model } from 'sequelize';
import sequelize from '../sequelize'; // Asegúrate de importar tu instancia de Sequelize
import Role from './Role';
import InsurancePlan from './InsurancePlan';

class Patient extends Model {
  public ID_patient!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public address!: string;
  public birthDate!: DateOnlyDataType;
  public phoneNumber!: string;
  public dni!: number;
  public gender!: string;
  public isDeleted!: boolean;
  // Otras propiedades y métodos del modelo si las hay
}
Patient.init(
  {
    ID_patient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false,
      validate: {
        isEmail: true, 
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['femenino','masculino','transgenero','no-binario', 'otro'],
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role, // Asegúrate de importar el modelo de Role
        key: 'ID_Role' // Esto debe coincidir con el nombre del campo ID_Role en el modelo Role
      }
    },
    inurancePlan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: InsurancePlan, // Asegúrate de importar el modelo de Role
        key: 'ID_insurancePlan' // Esto debe coincidir con el nombre del campo ID_insurancePlan en el modelo InsurancePlan
      }
    }
  },
  {
    sequelize,
    modelName: 'Patient'
  }
);
  
export default Patient;