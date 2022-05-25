const { Router } = require('express');

const animalRoutes = Router();

const animals = [];

animalRoutes.get('/animal', (request, response) => {
  return response.status(200).json(animals);
});

animalRoutes.get('/animal/id', (request, response) => {
  return response.status(200).json(animals);
});

animalRoutes.post('/animal', (request, response) => {
  const { name } = request.body;

  animals.push({ name });

  return response.status(201).json(animals);
});

animalRoutes.put('/animal/id', (request, response) => {
  // fazer
});

animalRoutes.delete('/animal/id', (request, response) => {
  const animalId = request.params;

  // if
});
