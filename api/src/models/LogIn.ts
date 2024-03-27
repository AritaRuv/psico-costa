import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize'; // Asegúrate de importar tu instancia de Sequelize

class LogIn extends Model {
    public ID_logIn!: number;
    public name!: string;
    public email!: string;
    // Otras propiedades y métodos del modelo si las hay
}
LogIn.init(
    {
        ID_logIn: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true, 
            allowNull: false,
            validate: {
                isEmail: true, 
            }
        },
        password: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'LogIn'
    }
);
  
export default LogIn;