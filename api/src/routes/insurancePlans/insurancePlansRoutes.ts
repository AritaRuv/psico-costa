import express, { Request, Response } from 'express';
import {createNewInsurancePlan, getAllInsurancePlans, getInsurancePlanById, softDeleteInsurancePlanById, updateInsurancePlanById} from './insurancePlansControllers';
const insurancePlansRouter = express.Router();

// Ruta para obtener todos los InsurancePlans
insurancePlansRouter.get('/get_all', async (req: Request, res: Response) => {
  try {
    const insurancePlans = await getAllInsurancePlans();
    res.json(insurancePlans); // Esto enviará los insurancePlans como respuesta
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para obtener un insurancePlan por ID
insurancePlansRouter.get('/:id', async (req: Request, res: Response) => {
  const insurancePlanId = req.params.id;
  try {
    const insurancePlan = await getInsurancePlanById(Number(insurancePlanId));
    res.json(insurancePlan);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para crear un nuevo insurancePlan
insurancePlansRouter.post('/', async (req: Request, res: Response) => {
  const newInsurancePlan = req.body; // Los datos del insurancePlan estarán en req.body
  try {
    const insurancePlan = await createNewInsurancePlan(newInsurancePlan);
    res.json(insurancePlan);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para actualizar un InsurancePlan por ID
insurancePlansRouter.put('/:id', async (req: Request, res: Response) => {
  const insurancePlanId = req.params.id;
  const datosActualizados = req.body; // Los nuevos datos del insurancePlan estarán en req.body
  try {
    const insurancePlan = await updateInsurancePlanById(Number(insurancePlanId), datosActualizados);
    res.json(insurancePlan);
  } catch (error) {
    res.status(500).json({error});
  }
});

// Ruta para eliminar un InsurancePlan por ID
insurancePlansRouter.delete('/:id', async (req: Request, res: Response) => {
  const insurancePlanId = req.params.id;
  try {
    const success = await softDeleteInsurancePlanById(Number(insurancePlanId));
    if(success) {
      res.send(`InsurancePlan con ID ${insurancePlanId} marcado como eliminado`);
    } else {
      res.status(404).send(`InsurancePlan con ID ${insurancePlanId} no encontrado`);
    }
  } catch (error) {
    res.status(500).json({error});
  }
});

export default insurancePlansRouter;
