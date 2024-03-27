"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sequelize.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('psicocosta', 'psicocosta', 'superSecretPassword!123', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
