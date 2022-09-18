"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import pool from "../database";
const database_1 = require("../database");
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const games = yield database_1.Mysql.query("SELECT * FROM games");
                //console.log(games);   PARA MOSTRAR EN CONSOLA
                res.json(games[0]);
            }
            catch (error) {
                console.log("Error db: " + error);
            }
        });
    }
    getjuego(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const games = yield database_1.Mysql.query('SELECT * FROM games WHERE id = ?', [id]);
                if (games.length > 0) {
                    return res.json(games[0]);
                }
                res.status(404).json({ text: "The game doesn't exists" });
            }
            catch (error) {
                console.log("Error db: " + error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("INSERT INTO games set ?", [req.body]);
                res.json({
                    message: "Game Saved",
                });
            }
            catch (error) {
                console.log("Error: " + error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.Mysql.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
                res.json({ message: "The game was updated" });
            }
            catch (error) {
                console.log("Error db: " + error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.Mysql.query('DELETE FROM games WHERE id = ?', [id]);
                res.json({ message: "The game was deleted" });
            }
            catch (error) {
                console.log("Error db: " + error);
            }
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
