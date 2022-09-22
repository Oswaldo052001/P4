import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        // URL DE LOS METODOS DE USUARIOS
        this.router.get('/',gamesController.list );  
        this.router.post('/singin', gamesController.singin);
        this.router.post('/', gamesController.createUsuario);  


        // URL DE LOS METODOS PARA CURSOS
        this.router.get('/cursos',gamesController.mostrarCursos );  
        this.router.post('/cursos',gamesController.createCurso);  
        this.router.delete('/cursos/:id',gamesController.delete); 
        this.router.get('/cursos/cate/:nombre',gamesController.darnombrecatedratico);
        this.router.get('/cursos/:nombre',gamesController.darnombrecurso);
        this.router.put('/:id',gamesController.update); //NO FUNCIONA
    }
    
}

const usersRoutes = new GamesRoutes();
export default usersRoutes.router;
