import { Router } from 'express';
import Farm from '../model/Farm.js';

export const farmRoutes = Router();

farmRoutes.post('/farm', (request, response) => {
  const farm = new Farm();
  farm = request.body;
  if (!farm) {
    return response.status(404).json({ Message: 'FARM NOT FOUND!!!' });
  } else {
    console.log(farm);
  }
  return response.status(201).json(farm);
});

// farmRoutes.get('/farm', (request, response) => {
//   const farm = request.body;
//   console.log(farm);
//   return response.status(200).json(farms);
// });

// farmRoutes.get('/farm/id', function (request, response) {
//   const id = request.params;
//   const { name } = request.body;

//   return response.status(200).json(farms);
// });

// farmRoutes.put('/farm/id', (request, response) => {
//   const { name } = request.body;

//   return response.status(200).json({ farms });
// });

// farmRoutes.delete('/farm/id', (request, response) => {
//   const { name } = request.body;

//   return response.status(200).json({ farms });
// });
