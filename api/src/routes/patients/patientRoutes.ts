import express, { Request, Response } from 'express';
import {createNewPatient, getAllPatients, getPatientById, softDeletePatientById, updatePatientById} from './patientControllers';
const patientRouter = express.Router();

// Ruta para obtener todos los pacientes
patientRouter.get('/get_all', async (req: Request, res: Response) => {
  try {
    const patients = await getAllPatients();
    res.json(patients); // Esto enviará los pacientes como respuesta
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para obtener un paciente por ID
patientRouter.get('/:id', async (req: Request, res: Response) => {
  const pacienteId = req.params.id;
  try {
    const patient = await getPatientById(Number(pacienteId));
    res.json(patient);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para crear un nuevo paciente
patientRouter.post('/', async (req: Request, res: Response) => {
  const newPatient = req.body; // Los datos del paciente estarán en req.body
  try {
    const patient = await createNewPatient(newPatient);
    res.json(patient);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para actualizar un paciente por ID
patientRouter.put('/:id', async (req: Request, res: Response) => {
  const pacienteId = req.params.id;
  const datosActualizados = req.body; // Los nuevos datos del paciente estarán en req.body
  try {
    const patient = await updatePatientById(Number(pacienteId), datosActualizados);
    res.json(patient);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para eliminar un paciente por ID
patientRouter.delete('/:id', async (req: Request, res: Response) => {
  const pacienteId = req.params.id;
  try {
    const success = await softDeletePatientById(Number(pacienteId));
    if(success) {
      res.send(`Paciente con ID ${pacienteId} marcado como eliminado`);
    } else {
      res.status(404).send(`Paciente con ID ${pacienteId} no encontrado`);
    }
  } catch (error) {
    res.status(500).json({error});
  }
});

export default patientRouter;
