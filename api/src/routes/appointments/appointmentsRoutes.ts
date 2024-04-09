import express, { Request, Response } from 'express';
import {createNewAppointment, getAllAppointments, getAppointmentById, updateAppointmentById} from './appointmentsControllers';
const appointmentsRouter = express.Router();

// Ruta para obtener todos los InsurancePlans
appointmentsRouter.get('/get_all', async (req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointments();
    res.json(appointments); // Esto enviará los insurancePlans como respuesta
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para obtener un appointment por ID
appointmentsRouter.get('/:id', async (req: Request, res: Response) => {
  const appointmentId = req.params.id;
  try {
    const appointment = await getAppointmentById(Number(appointmentId));
    res.json(appointment);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para crear un nuevo appointment
appointmentsRouter.post('/', async (req: Request, res: Response) => {
  const newAppointment = req.body; // Los datos del appointment estarán en req.body
  try {
    const appointment = await createNewAppointment(newAppointment);
    res.json(appointment);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para actualizar un appointment por ID
appointmentsRouter.put('/:id', async (req: Request, res: Response) => {
  const appointmentId = req.params.id;
  const datosActualizados = req.body; // Los nuevos datos del appointment estarán en req.body
  try {
    const appointment = await updateAppointmentById(Number(appointmentId), datosActualizados);
    res.json(appointment);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para eliminar un appointment por ID
// appointmentsRouter.delete('/:id', async (req: Request, res: Response) => {
//   const appointmentId = req.params.id;
//   try {
//     const success = await softDeleteappointmentById(Number(appointmentId));
//     if(success) {
//       res.send(`appointment con ID ${appointmentId} marcado como eliminado`);
//     } else {
//       res.status(404).send(`appointment con ID ${appointmentId} no encontrado`);
//     }
//   } catch (error) {
//     res.status(500).json({error});
//   }
// });

export default appointmentsRouter;
