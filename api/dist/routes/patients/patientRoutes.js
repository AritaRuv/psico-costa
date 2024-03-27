"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientControllers_1 = require("./patientControllers");
const patientRouter = express_1.default.Router();
// Ruta para obtener todos los pacientes
patientRouter.get('/get_all', async (req, res) => {
    try {
        const patients = await (0, patientControllers_1.getAllPatients)();
        res.json(patients); // Esto enviará los pacientes como respuesta
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Ruta para obtener un paciente por ID
patientRouter.get('/:id', async (req, res) => {
    const pacienteId = req.params.id;
    try {
        const patient = await (0, patientControllers_1.getPatientById)(Number(pacienteId));
        res.json(patient);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Ruta para crear un nuevo paciente
patientRouter.post('/', async (req, res) => {
    const newPatient = req.body; // Los datos del paciente estarán en req.body
    try {
        const patient = await (0, patientControllers_1.createNewPatient)(newPatient);
        res.json(patient);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Ruta para actualizar un paciente por ID
patientRouter.put('/:id', async (req, res) => {
    const pacienteId = req.params.id;
    const datosActualizados = req.body; // Los nuevos datos del paciente estarán en req.body
    try {
        const patient = await (0, patientControllers_1.updatePatientById)(Number(pacienteId), datosActualizados);
        res.json(patient);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Ruta para eliminar un paciente por ID
patientRouter.delete('/:id', async (req, res) => {
    const pacienteId = req.params.id;
    try {
        const success = await (0, patientControllers_1.softDeletePatientById)(Number(pacienteId));
        if (success) {
            res.send(`Paciente con ID ${pacienteId} marcado como eliminado`);
        }
        else {
            res.status(404).send(`Paciente con ID ${pacienteId} no encontrado`);
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.default = patientRouter;
