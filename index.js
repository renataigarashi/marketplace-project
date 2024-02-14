const express = require('express');
const connectToDatabase = require('./src/database/database');
const user = require('./src/router/user.router');

const app = express();
const port = 3000;

app.use(express.json());
connectToDatabase();

app.use('/user', user);

app.get('/', (req, res) => res.send({ message: 'Bem vindo ao marketplace' }));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
