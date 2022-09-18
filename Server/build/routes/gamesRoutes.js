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
        this.router.get('/', gamesController_1.default.list); // obteniendo todos los juegos
        this.router.get('/:id', gamesController_1.default.getjuego); // obteniendo un juego en especifico
        this.router.post('/', gamesController_1.default.create); //publicnado un juego
        this.router.put('/:id', gamesController_1.default.update); //actualizando un juego y mandando un parametro
        this.router.delete('/:id', gamesController_1.default.delete); //eliminando un juego y mandando un parametro
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
