import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize'; // Asegúrate de importar tu instancia de Sequelize
import Role from './Role';

class Professional extends Model {
    public ID_professional!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public license!: string;
    public socialNumber!: number;
    public phoneNumber!: number;
    public isDeleted!: boolean;
    // Otras propiedades y métodos del modelo si las hay
}
Professional.init(
    {
        ID_professional: {
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
        license: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        socialNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        },
        isDeleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'Professional'
    }
);
  
export default Professional;