import Professional from './models/Professional';
import LogIn from './models/LogIn';
import Receptionist from './models/Receptionist';
import Patient from './models/Patient';

// En el modelo de LogIn
LogIn.hasOne(Patient, { foreignKey: 'ID_logIn', as: 'patient' });
LogIn.hasOne(Receptionist, { foreignKey: 'ID_logIn', as: 'receptionist' });
LogIn.hasOne(Professional, { foreignKey: 'ID_logIn', as: 'professional' });

//


//Si quiero hacer una consulta a la la tabla login
// const login = await LogIn.findOne({
//   where: { ID_logIn: loginId },
//   include: [
//     { model: Patient, as: 'patient' },
//     { model: Receptionist, as: 'receptionist' },
//     { model: Professional, as: 'professional' }
//   ]
// });
