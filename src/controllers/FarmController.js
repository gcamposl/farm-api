import { Router } from 'express';
import dotenv from 'dotenv';

export const farmRoutes = Router();

dotenv.config({ path: './.env' });

const farms = [];

farmRoutes.get(process.env.FARM_ROUTE, (request, response) => {
  //   const { name } = request.body;
  return response.status(200).json(farms);
});

farmRoutes.get(process.env.FARM_ROUTE_PARAMS, (request, response) => {
  const id = request.params;
  const { name } = request.body;

  //   if (farms.some(id)) {
  //   }

  return response.status(200).json(farms);
});

farmRoutes.post(process.env.FARM_ROUTE, (request, response) => {
  const { name } = request.body;
  console.log(name);
  if (name) {
    farms.push({ id, name });
  } else {
    return response.status(404).json({ Message: 'Nao foi encontrado o nome' });
  }
  return response.status(201).json({ farms });
});

farmRoutes.put(process.env.FARM_ROUTE_PARAMS, (request, response) => {
  const { name } = request.body;
  console.log(name);
  //   if (farms.name == name) {
  //     // pegar posicao e alterar o array
  //   } else {
  //     return response.status(404).json({ Message: 'Nao foi encontrado o nome' });
  //   }
  return response.status(200).json({ farms });
});

farmRoutes.delete(process.env.FARM_ROUTE_PARAMS, (request, response) => {
  const { name } = request.body;
  console.log(name);
  //   if (farms.name == name) {
  //     // pegar posicao e alterar o array
  //   } else {
  //     return response.status(404).json({ Message: 'Nao foi encontrado o nome' });
  //   }
  return response.status(200).json({ farms });
});
