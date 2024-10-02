import knex from 'knex';
import config from '../config/knexfile';

const environment = process.env.NODE_ENV || 'development';
const cfg = config[environment];

const db = knex(cfg);

export default db;
