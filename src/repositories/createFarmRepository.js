import { pool } from '../database/index.js';

export class CreateFarmRepository {
  constructor() {}

  async createFarm(farm) {
    try {
      await pool.query(
        `INSERT INTO farm 
            (far_id, far_name, far_size, created_at) 
        VALUES 
            (${farm.far_id}, ${farm.far_name}, ${farm.far_size}, ${farm.created_at})`,
        (err, res) => {
          console.log(err, res);
          pool.end();
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
}
