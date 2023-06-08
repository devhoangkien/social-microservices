import * as dotenv from 'dotenv';

dotenv.config();

export const APP_PORT = Number(process.env.APP_PORT);
export const DB_CONFIG: any = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
};

export const DB_POOL_CONFIG = {
  max: parseInt(process.env.DB_POOL_MAX, 10) || 10,
  min: parseInt(process.env.DB_POOL_MIN, 10) || 0,
  acquire: parseInt(process.env.DB_POOL_ACQUIRE_TIME, 10) || 30000,
  idle: parseInt(process.env.DB_POOL_IDLE_TIME, 10) || 10000,
};
