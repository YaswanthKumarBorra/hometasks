import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('Users', 'postgres', 'yaswanth', {
    host: 'localhost',
    dialect: 'postgres'
});
