"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // URL DE LOS METODOS DE USUARIOS
        this.router.get('/', gamesController_1.default.list);
        this.router.post('/singin', gamesController_1.default.singin);
        this.router.post('/', gamesController_1.default.createUsuario);
        // URL DE LOS METODOS PARA CURSOS
        this.router.get('/cursos', gamesController_1.default.mostrarCursos);
        this.router.post('/cursos', gamesController_1.default.createCurso);
        this.router.delete('/cursos/:id', gamesController_1.default.delete);
        this.router.get('/cursos/cate/:nombre', gamesController_1.default.darnombrecatedratico);
        this.router.get('/cursos/:nombre', gamesController_1.default.darnombrecurso);
        this.router.put('/:id', gamesController_1.default.update); //NO FUNCIONA
    }
}
const usersRoutes = new GamesRoutes();
exports.default = usersRoutes.router;
