"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize")); // Asegúrate de importar tu instancia de Sequelize
const Role_1 = __importDefault(require("./Role"));
const InsurancePlan_1 = __importDefault(require("./InsurancePlan"));
class Patient extends sequelize_1.Model {
    ID_patient;
    firstName;
    lastName;
    email;
    address;
    birthDate;
    phoneNumber;
    dni;
    gender;
    isDeleted;
}
Patient.init({
    ID_patient: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    dni: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    isDeleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    gender: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['femenino', 'masculino', 'transgenero', 'no-binario', 'otro'],
        allowNull: false,
    },
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role_1.default,
            key: 'ID_Role' // Esto debe coincidir con el nombre del campo ID_Role en el modelo Role
        }
    },
    inurancePlan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: InsurancePlan_1.default,
            key: 'ID_insurancePlan' // Esto debe coincidir con el nombre del campo ID_insurancePlan en el modelo InsurancePlan
        }
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'Patient'
});
exports.default = Patient;
