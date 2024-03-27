"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Professional_1 = __importDefault(require("./models/Professional"));
const LogIn_1 = __importDefault(require("./models/LogIn"));
const Receptionist_1 = __importDefault(require("./models/Receptionist"));
const Patient_1 = __importDefault(require("./models/Patient"));
// En el modelo de LogIn
LogIn_1.default.hasOne(Patient_1.default, { foreignKey: 'ID_logIn', as: 'patient' });
LogIn_1.default.hasOne(Receptionist_1.default, { foreignKey: 'ID_logIn', as: 'receptionist' });
LogIn_1.default.hasOne(Professional_1.default, { foreignKey: 'ID_logIn', as: 'professional' });
//
//Si quiero hacer una consulta a la la tabla login
// const login = await LogIn.findOne({
//   where: { ID_logIn: loginId },
//   include: [
//     { model: Patient, as: 'patient' },
//     { model: Receptionist, as: 'receptionist' },
//     { model: Professional, as: 'professional' }
//   ]
// });
