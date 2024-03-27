import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize'; // Asegúrate de importar tu instancia de Sequelize
import Role from './Role';

class Receptionist extends Model {
    public ID_receptionist!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public admin!: boolean;
    public phoneNumber!: number;
    // Otras propiedades y métodos del modelo si las hay
}
Receptionist.init(
    {
        ID_receptionist: {
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
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: true,
            defaultValue: false
        },
        phoneNumber: {
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
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Role, // Asegúrate de importar el modelo de Role
                key: 'ID_Role' // Esto debe coincidir con el nombre del campo ID_Role en el modelo Role
            }
        }
    },
    {
        sequelize,
        modelName: 'Receptionist'
    }
);
  
export default Receptionist;