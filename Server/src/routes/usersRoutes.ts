import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',gamesController.list );  // obteniendo todos los juegos
        this.router.get('/:id',gamesController.getjuego);  // obteniendo un juego en especifico
        this.router.post('/', gamesController.create);   //publicnado un juego
        this.router.put('/:id',gamesController.update);   //actualizando un juego y mandando un parametro
        this.router.delete('/:id',gamesController.delete);  //eliminando un juego y mandando un parametro
    }
    
}

const usersRoutes = new GamesRoutes();
export default usersRoutes.router;
