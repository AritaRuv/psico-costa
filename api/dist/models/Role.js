"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize")); // Asegúrate de importar tu instancia de Sequelize
class Role extends sequelize_1.Model {
    ID_Role;
    roleName;
}
Role.init({
    ID_Role: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['admin', 'recepcionist', 'professinal', 'patient'],
        allowNull: false
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'Role'
});
exports.default = Role;
