"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sequelize.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('psicocosta', 'psicocosta', 'nueva_contraseña', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});
exports.default = sequelize;
