// sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('psicocosta', 'psicocosta', 'superSecretPassword!123', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
