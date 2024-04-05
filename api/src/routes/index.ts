import express from 'express';
import patientRouter from './patients/patientRoutes';
import professionalsRouter from './professionals/professionalsRoutes';
import healthInsurancesRouter from './healthInsurances/healthInsurancesRoutes';

const router = express.Router();


router.use('/patients', patientRouter);
router.use('/professionals', professionalsRouter);
router.use('/healtInsurances', healthInsurancesRouter);


export default router;
