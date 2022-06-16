import { Router } from 'express';
import handleCreateFarm from '../services/createFarmSevice.js';

export const farmRoutes = Router();

farmRoutes.post('/farm', (request, response) => {
  const farm = request.body;
  const insertFarm = handleCreateFarm(farm);
  if (!insertFarm) {
    return response.status(404).send();
  }
  return response.status(201).send();
});

farmRoutes.get('/farm', (request, response) => {
  const farm = request.body;
  console.log(farm);
  return response.status(200).json(farms);
});

farmRoutes.get('/farm/id', function (request, response) {
  const id = request.params;
  const { name } = request.body;

  return response.status(200).json(farms);
});

farmRoutes.put('/farm/id', (request, response) => {
  const { name } = request.body;

  return response.status(200).json({ farms });
});

farmRoutes.delete('/farm/id', (request, response) => {
  const { name } = request.body;

  return response.status(200).json({ farms });
});
