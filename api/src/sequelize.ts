// sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('psicocosta', 'psicocosta', 'nueva_contraseña', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql'
});

export default sequelize;
