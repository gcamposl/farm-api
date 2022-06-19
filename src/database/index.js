import pg from 'pg';
const Client = pg.Client;

export const client = new Client({
  user: 'farm',
  host: 'localhost',
  password: 'farm123',
  database: 'farmdb',
  port: 5432,
});
