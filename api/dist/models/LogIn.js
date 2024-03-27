"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize")); // Asegúrate de importar tu instancia de Sequelize
class LogIn extends sequelize_1.Model {
    ID_logIn;
    name;
    email;
}
LogIn.init({
    ID_logIn: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: false
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'LogIn'
});
exports.default = LogIn;
