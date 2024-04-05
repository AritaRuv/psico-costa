import express, { Request, Response } from 'express';
import {createNewProfessional, getAllProfessionals, getProfessionalById, softDeleteProfessionalById, updateProfessionalById} from './professionalsControllers';
const professionalsRouter = express.Router();

// Ruta para obtener todos los Profesionales
professionalsRouter.get('/get_all', async (req: Request, res: Response) => {
  try {
    const professionals = await getAllProfessionals();
    res.json(professionals); // Esto enviará los professionals como respuesta
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para obtener un Profesional por ID
professionalsRouter.get('/:id', async (req: Request, res: Response) => {
  const professionalId = req.params.id;
  try {
    const professional = await getProfessionalById(Number(professionalId));
    res.json(professional);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para crear un nuevo Profesional
professionalsRouter.post('/', async (req: Request, res: Response) => {
  const newProfessional = req.body; // Los datos del paciente estarán en req.body
  try {
    const professional = await createNewProfessional(newProfessional);
    res.json(professional);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para actualizar un Profesional por ID
professionalsRouter.put('/:id', async (req: Request, res: Response) => {
  const professionalId = req.params.id;
  const datosActualizados = req.body; // Los nuevos datos del profesional estarán en req.body
  try {
    const professional = await updateProfessionalById(Number(professionalId), datosActualizados);
    res.json(professional);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para eliminar un Profesional por ID
professionalsRouter.delete('/:id', async (req: Request, res: Response) => {
  const professionalId = req.params.id;
  try {
    const success = await softDeleteProfessionalById(Number(professionalId));
    if(success) {
      res.send(`Profesional con ID ${professionalId} marcado como eliminado`);
    } else {
      res.status(404).send(`Profesional con ID ${professionalId} no encontrado`);
    }
  } catch (error) {
    res.status(500).json({error});
  }
});

export default professionalsRouter;
