const express = require('express');
// const { v4: uuid4 } = require('uuid');

//const router = require('./controllers');
const { farmRoutes } = require('./controllers/FarmController');

const app = express();

app.use(express.json());

app.use(farmRoutes);

app.listen(3334, () => console.log('server is runnig'));
