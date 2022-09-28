"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // URL DE LOS METODOS DE USUARIOS
        this.router.get('/', UserController_1.default.list);
        this.router.post('/singin', UserController_1.default.singin);
        this.router.post('/', UserController_1.default.createUsuario);
        this.router.get('/:carne', UserController_1.default.getoneuser);
        // URL DE LOS METODOS PARA CURSOS
        this.router.get('/cate/cursos', UserController_1.default.mostrarCursos);
        this.router.post('/cursos', UserController_1.default.createCurso);
        this.router.delete('/cursos/:id', UserController_1.default.delete);
        this.router.get('/cursos/cate/:nombre', UserController_1.default.darnombrecatedratico);
        this.router.get('/cursos/:nombre', UserController_1.default.darnombrecurso);
        this.router.put('/:id', UserController_1.default.update); //NO FUNCIONA
        // URL DE COMENTARIOS
        this.router.post('/cursos/coment/', UserController_1.default.crearcomentario);
        this.router.get('/cate/cursos/coment/', UserController_1.default.traercoment);
        this.router.delete('/cate/cursos/coment/:id', UserController_1.default.deletecom);
        this.router.get('/cate/cursos/coment/:titulo', UserController_1.default.onecoment);
        this.router.get('/cursos/coment/:nombre', UserController_1.default.onecoment_prof);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
