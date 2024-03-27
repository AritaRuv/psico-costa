"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize")); // Asegúrate de importar tu instancia de Sequelize
const Role_1 = __importDefault(require("./Role"));
class Professional extends sequelize_1.Model {
    ID_professional;
    firstName;
    lastName;
    email;
    license;
    socialNumber;
    phoneNumber;
}
Professional.init({
    ID_professional: {
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
    license: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    socialNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.INTEGER,
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
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role_1.default,
            key: 'ID_Role' // Esto debe coincidir con el nombre del campo ID_Role en el modelo Role
        }
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'Professional'
});
exports.default = Professional;
