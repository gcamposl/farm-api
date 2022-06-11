import { Router } from 'express';

export const farmRoutes = Router();

const farms = [];

farmRoutes.get('/farm', (request, response) => {
  const { name } = request.body;
  console.log(name);
  return response.status(200).json(farms);
});

farmRoutes.get('/farm/id', function (request, response) {
  const id = request.params;
  const { name } = request.body;

  return response.status(200).json(farms);
});

farmRoutes.post('/farm', (request, response) => {
  const { name } = request.body;
  if (!name) {
    return response.status(404).json({ Message: 'Nao foi encontrado o nome' });
  } else {
    console.log(name);
  }
  return response.status(201).json(name);
});

farmRoutes.put('/farm/id', (request, response) => {
  const { name } = request.body;

  return response.status(200).json({ farms });
});

farmRoutes.delete('/farm/id', (request, response) => {
  const { name } = request.body;

  return response.status(200).json({ farms });
});
