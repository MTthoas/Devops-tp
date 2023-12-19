import express from 'express';
import UserController from './controllers/user.controller';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/user', UserController.getUser);

// Exportez l'application Express pour l'utiliser dans d'autres fichiers, comme vos tests
export default app;

// Séparez la logique de démarrage du serveur
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Serveur démarré sur http://localhost:${port}`);
    });
}
