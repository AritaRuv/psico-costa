import { DataTypes, DateOnlyDataType, Model } from 'sequelize';
import sequelize from '../sequelize'; // Asegúrate de importar tu instancia de Sequelize
import Patient from './Patient';
import Professional from './Professional';

class Appointment extends Model {
  public ID_appointment!: number;
  public date!: DateOnlyDataType;
  public hour!: string;
  public patient_id!: number;
  public professional_id!: number;

  // Otras propiedades y métodos del modelo si las hay
}
Appointment.init(
  {
    ID_appointment: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hour: {
      type: DataTypes.STRING,
      allowNull: false
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Patient,
        key: 'ID_patient' // Esto debe coincidir con el nombre del campo ID en el modelo Patient;
      }
    },
    professional_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Professional,
        key: 'ID_professional' // Esto debe coincidir con el nombre del campo ID en el modelo Professional
      }
    }},
  {
    sequelize,
    modelName: 'Appointment'
  }
);
  
export default Appointment;