import { client } from '../database/index.js';

export class CreateFarmRepository {
  constructor() {}

  async createFarm(farm) {
    try {
      await client.connect();
      await client.query(
        `INSERT INTO farm 
            (far_id, far_name, far_size, created_at) 
        VALUES 
            (${farm.farmId}, ${farm.farmName}, ${farm.farmSize}, ${farm.createdAt})`,
        (err, res) => {
          console.log(err, res);
          client.end();
        }
      );
    } catch (err) {
      console.log(e);
      throw `Erro ao inserir os dados - ${err}`;
    }
  }
}
