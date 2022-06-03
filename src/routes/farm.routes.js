import { Router } from 'express';

export const farmRoutes = Router();

const farms = [];

farmRoutes.get('/farm', (request, response) => {
  const { name } = request.body;
  return response.status(200).json(farms);
});

farmRoutes.get('/farm/id', (request, response) => {
  const id = request.params;
  const { name } = request.body;

  return response.status(200).json(farms);
});

farmRoutes.post('/farm', (request, response) => {
  const { name } = request.body;
  console.log(name);
  if (name) {
    farms.push({ id, name });
  } else {
    return response.status(404).json({ Message: 'Nao foi encontrado o nome' });
  }

  return response.status(201).json({ farms });
});

farmRoutes.put('/farm/id', (request, response) => {
  const { name } = request.body;

  return response.status(200).json({ farms });
});

farmRoutes.delete('/farm/id', (request, response) => {
  const { name } = request.body;

  return response.status(200).json({ farms });
});
