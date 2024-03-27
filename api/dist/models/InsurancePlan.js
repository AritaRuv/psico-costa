"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize")); // Asegúrate de importar tu instancia de Sequelize
const HealthInsurance_1 = __importDefault(require("./HealthInsurance"));
class InsurancePlan extends sequelize_1.Model {
    ID_insurancePlan;
    name;
}
InsurancePlan.init({
    ID_insurancePlan: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    healthInsurance_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: HealthInsurance_1.default,
            key: 'ID_healthInsurance' // Esto debe coincidir con el nombre del campo ID_healthInsurance en el modelo HealthInsurance
        }
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'InsurancePlan'
});
exports.default = InsurancePlan;
