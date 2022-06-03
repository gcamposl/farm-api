import express from 'express';
// const { v4: uuid4 } = require('uuid');

//const router = require('./controllers');
import { farmRoutes } from './controllers/FarmController.js';

const app = express();

app.use(express.json());

app.use(farmRoutes);

app.listen(8080, () => console.log('server is runnig'));
