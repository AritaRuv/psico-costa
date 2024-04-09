import express, { Request, Response } from 'express';
import {createHealthInsurance, getAllHealthInsurances, getHealthInsuranceById, softDeleteHealthInsuranceById, updateHealthInsuranceById} from './healthInsurancesControllers';
const healthInsurancesRouter = express.Router();

// Ruta para obtener todos los healthInsurances
healthInsurancesRouter.get('/get_all', async (req: Request, res: Response) => {
  try {
    const healthInsurances = await getAllHealthInsurances();
    res.json(healthInsurances); // Esto enviará los healthInsurances como respuesta
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para obtener un healthInsurances por ID
healthInsurancesRouter.get('/:id', async (req: Request, res: Response) => {
  const healthInsuranceId = req.params.id;
  try {
    const healthInsurance = await getHealthInsuranceById(Number(healthInsuranceId));
    res.json(healthInsurance);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para crear un nuevo healthInsurance
healthInsurancesRouter.post('/', async (req: Request, res: Response) => {
  const newHealthInsurance= req.body; // Los datos del healthInsurance estarán en req.body
  try {
    const healthInsurance = await createHealthInsurance(newHealthInsurance);
    res.json(healthInsurance);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para actualizar un healthInsurance por ID
healthInsurancesRouter.put('/:id', async (req: Request, res: Response) => {
  const healthInsuranceId = req.params.id;
  const datosActualizados = req.body; // Los nuevos datos del profesional estarán en req.body
  try {
    const healthInsurance = await updateHealthInsuranceById(Number(healthInsuranceId), datosActualizados);
    res.json(healthInsurance);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para eliminar un healthInsurance por ID
healthInsurancesRouter.delete('/:id', async (req: Request, res: Response) => {
  const healthInsuranceId = req.params.id;
  try {
    const success = await softDeleteHealthInsuranceById(Number(healthInsuranceId));
    if(success) {
      res.send(`HealthInsurance con ID ${healthInsuranceId} marcado como eliminado`);
    } else {
      res.status(404).send(`HealthInsurance con ID ${healthInsuranceId} no encontrado`);
    }
  } catch (error) {
    res.status(500).json({error});
  }
});

export default healthInsurancesRouter;
