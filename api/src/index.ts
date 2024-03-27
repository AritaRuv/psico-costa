import express, { Request, Response } from 'express';
import sequelize from './sequelize'; // Importa la instancia de Sequelize que configuraste
import Appointment from './models/Appointment'; // Importa tus modelos
import dotenv from 'dotenv';
import cors from 'cors'; 
import router from './routes';
import Professional from './models/Professional';
import Patient from './models/Patient';
import Receptionist from './models/Receptionist';
import HealthInsurance from './models/HealthInsurance';
import InsurancePlan from './models/InsurancePlan';
import LogIn from './models/LogIn';
import Role from './models/Role';

dotenv.config(); // Carga las variables de entorno de un archivo .env si lo deseas

const app = express();
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === 'development';

app.use(express.json());
app.use(cors()); // Configura CORS si es necesario

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');
    // Sincroniza tus modelos con la base de datos
    const models = [
      Role,
      HealthInsurance,
      InsurancePlan,
      Professional,
      Patient,
      Receptionist,
      LogIn,
      Appointment,
    ];
    for (const model of models) {
      await model.sync({ force: isDev });
    }
   
  } catch (error) {
    console.error('Error en auth al conectar con la base de datos:', {error});
  }
})();

app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
}).on('error', (err: Error) => {
  console.error('Error al iniciar el servidor:', {err});
});
  
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send('Hubo un error en el servidor.');
});
  
  