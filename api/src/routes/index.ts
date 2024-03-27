import express from 'express';
import patientRouter from './patients/patientRoutes';

const router = express.Router();


router.use('/patients', patientRouter);


export default router;
