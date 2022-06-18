import pgp from 'pg-promise';

const db = pgp({
  user: 'farm',
  host: 'localhost',
  password: 'farm123',
  database: 'farmdb',
  port: 5432,
});

export default db;
