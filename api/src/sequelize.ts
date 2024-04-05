// sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('psicocosta', 'psicocosta', 'nueva_contraseña', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql'
});

sequelize.sync({ force: true }).then(() => {
  console.log('Todas las tablas han sido eliminadas y sincronizadas');
}).catch(err => {
  console.error('Error al sincronizar tablas:', err);
});

export default sequelize;
