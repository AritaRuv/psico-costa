import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize'; // Asegúrate de importar tu instancia de Sequelize
import HealthInsurance from './HealthInsurance';

class InsurancePlan extends Model {
  public ID_insurancePlan!: number;
  public name!: string;
  public isDeleted!: boolean;

  // Otras propiedades y métodos del modelo si las hay
}
InsurancePlan.init(
  {
    ID_insurancePlan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    healthInsurance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: HealthInsurance, // Asegúrate de importar el modelo de HealthInsurance
        key: 'ID_healthInsurance' // Esto debe coincidir con el nombre del campo ID_healthInsurance en el modelo HealthInsurance
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'InsurancePlan'
  }
);
  
export default InsurancePlan;