import { Router } from 'express'
import usersController from '../controllers/UserController'

class UsersRoutes {
    public router: Router = Router()

    constructor() {
        this.config()
    }

    config(): void {
        // URL DE LOS METODOS DE USUARIOS

        this.router.get('/', usersController.list)
        this.router.post('/singin', usersController.singin)
        this.router.post('/', usersController.createUsuario)
        this.router.get('/:carne', usersController.getoneuser)
        this.router.delete('/:id', usersController.delete_user)

        // URL DE LOS METODOS PARA CURSOS
        this.router.get('/cate/cursos', usersController.mostrarCursos)
        this.router.post('/cursos', usersController.createCurso)
        this.router.delete('/cursos/:id', usersController.delete)
        this.router.get(
            '/cursos/cate/:nombre',
            usersController.darnombrecatedratico,
        )
        this.router.get('/cursos/:nombre', usersController.darnombrecurso)

        // URL DE COMENTARIOS
        this.router.post('/cursos/coment/', usersController.crearcomentario)
        this.router.get('/cate/cursos/coment/', usersController.traercoment)
        this.router.delete('/cate/cursos/coment/:id', usersController.deletecom)
        this.router.get(
            '/cate/cursos/coment/:titulo',
            usersController.onecoment,
        )
        this.router.get(
            '/cursos/coment/:nombre',
            usersController.onecoment_prof,
        )
        this.router.put('/cursos/coment/:id', usersController.update)
    }
}

const usersRoutes = new UsersRoutes()
export default usersRoutes.router
