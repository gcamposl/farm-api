import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});

export default { pool };
