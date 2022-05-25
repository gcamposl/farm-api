const { Router } = require('express');

const animalRoutes = Router();

const animals = [];

animalRoutes.get(process.env.ANIMALROUTE, (request, response) => {
  return response.status(200).json(animals);
});

animalRoutes.get(process.env.ANIMALROUTEPARAMS, (request, response) => {
  return response.status(200).json(animals);
});

animalRoutes.post(process.env.ANIMALROUTE, (request, response) => {
  const { name } = request.body;

  animals.push({ name });

  return response.status(201).json(animals);
});

animalRoutes.put(process.env.ANIMALROUTEPARAMS, (request, response) => {
  // fazer
});

animalRoutes.delete(process.env.ANIMALROUTEPARAMS, (request, response) => {
  const animalId = request.params;

  // if
});
