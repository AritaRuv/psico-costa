"use strict";
// patientController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeletePatientById = exports.updatePatientById = exports.createNewPatient = exports.getPatientById = exports.getAllPatients = void 0;
const Patient_1 = __importDefault(require("../../models/Patient")); // Asegúrate de importar tu modelo de Paciente
async function getAllPatients() {
    try {
        const patients = await Patient_1.default.findAll({
            where: { isDeleted: false }
        }); // Esto obtendrá todos los pacientes de la base de datos
        return patients;
    }
    catch (error) {
        throw new Error('Error al obtener los pacientes');
    }
}
exports.getAllPatients = getAllPatients;
async function getPatientById(ID_patient) {
    try {
        const patient = await Patient_1.default.findByPk(ID_patient); // Busca un paciente por su ID
        if (!patient || patient.isDeleted) {
            throw new Error(`Paciente con id: ${ID_patient} no encontrado`);
        }
        return patient;
    }
    catch (error) {
        throw new Error('Error al obtener paciente by id');
    }
}
exports.getPatientById = getPatientById;
async function createNewPatient(body) {
    const { firstName, lastName, email, address, birthDate, phoneNumber, dni, gender } = body;
    try {
        const newPatient = await Patient_1.default.create({
            firstName,
            lastName,
            email,
            address,
            birthDate,
            phoneNumber,
            dni,
            gender
        });
        return newPatient;
    }
    catch (error) {
        throw new Error('Error al crear paciente');
    }
}
exports.createNewPatient = createNewPatient;
async function updatePatientById(ID_patient, updatedData) {
    try {
        const patient = await Patient_1.default.findByPk(ID_patient);
        if (!patient) {
            throw new Error(`Paciente con ID ${ID_patient} no encontrado`);
        }
        const updatedPatient = await patient.update(updatedData);
        return updatedPatient;
    }
    catch (error) {
        throw new Error('Error al actualizar paciente');
    }
}
exports.updatePatientById = updatePatientById;
async function softDeletePatientById(ID_patient) {
    try {
        const patient = await Patient_1.default.findByPk(ID_patient);
        if (!patient) {
            throw new Error(`Paciente con ID ${ID_patient} no encontrado`);
        }
        await patient.update({ isDeleted: true }); // Suponiendo que hay un campo 'isDeleted' en tu modelo Patient
    }
    catch (error) {
        throw new Error('Error al eliminar paciente');
    }
}
exports.softDeletePatientById = softDeletePatientById;
