import express from 'express';
import UserController from './controllers/user.controller';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/user', UserController.getUser);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

export default app;