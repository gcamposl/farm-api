import { Router } from 'express';

export const animalRoutes = Router();

const animals = [];

animalRoutes.get(process.env.ANIMAL_ROUTE, (request, response) => {
  return response.status(200).json(animals);
});

animalRoutes.get(process.env.ANIMAL_ROUTE_PARAMS, (request, response) => {
  return response.status(200).json(animals);
});

animalRoutes.post(process.env.ANIMAL_ROUTE, (request, response) => {
  const { name } = request.body;

  animals.push({ name });

  return response.status(201).json(animals);
});

animalRoutes.put(process.env.ANIMAL_ROUTE_PARAMS, (request, response) => {
  // fazer
});

animalRoutes.delete(process.env.ANIMAL_ROUTE_PARAMS, (request, response) => {
  const animalId = request.params;

  // if
});
