import express from 'express';
import { farmRoutes } from './routes/farm.routes.js';

const port = 8000;
const app = express();

app.use(express.json());

app.use(farmRoutes);

app.listen(port, () => console.log(`server is runnig on ${port}`));
