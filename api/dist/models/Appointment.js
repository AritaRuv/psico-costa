"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize")); // Asegúrate de importar tu instancia de Sequelize
const Patient_1 = __importDefault(require("./Patient"));
const Professional_1 = __importDefault(require("./Professional"));
class Appointment extends sequelize_1.Model {
    ID_appointment;
    date;
    hour;
}
Appointment.init({
    ID_appointment: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    hour: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    patient_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Patient_1.default,
            key: 'ID_patient' // Esto debe coincidir con el nombre del campo ID en el modelo Patient;
        }
    },
    professional_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Professional_1.default,
            key: 'ID_professional' // Esto debe coincidir con el nombre del campo ID en el modelo Professional
        }
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'Appointment'
});
exports.default = Appointment;
