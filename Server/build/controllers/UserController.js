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
class UsersController {
    //-------------------------------------------------- METODOS DE LOS USUARIOS--------------------------------------------
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield database_1.Mysql.query('SELECT * FROM users');
                res.json(users[0]);
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    //usuario especifico
    getoneuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carne } = req.params;
            try {
                const Userone = yield database_1.Mysql.query('SELECT * FROM users WHERE carne = ?', [carne]);
                if (Userone.length > 0) {
                    return res.json(Userone[0]);
                }
                res.status(404).json({ text: "the doesn't exists" });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    //crear usuario
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query('INSERT INTO users set ?', [req.body]);
                res.json({
                    message: 'User Saved',
                });
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        });
    }
    singin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carne, contrasena } = req.body;
            try {
                const valores = yield database_1.Mysql.query('SELECT * from users WHERE carne=? and contrasena=?', [carne, contrasena]);
                if (valores.length > 0) {
                    return res.json(valores[0]);
                }
                return res.status(404).json({ text: "The user doesn't exists" });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    delete_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //creando un metodo delete
            const { id } = req.params;
            try {
                yield database_1.Mysql.query('DELETE FROM users WHERE id = ?', [id]);
                res.json({ message: 'The users was deleted' });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    //---------------------------------------------------METODOS DE LOS CURSOS-----------------------------------------------
    mostrarCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield database_1.Mysql.query('SELECT * FROM cursos');
                res.json(cursos[0]);
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    createCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query('INSERT INTO cursos set ?', [req.body]);
                res.json({
                    message: 'Curso Saved',
                });
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        });
    }
    darnombrecurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            try {
                const curso = yield database_1.Mysql.query('SELECT * FROM cursos WHERE nombre_curso = ?', [nombre]);
                if (curso.length > 0) {
                    return res.json(curso[0]);
                }
                res.status(404).json({ text: "The user doesn't exists" });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    darnombrecatedratico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //creando un metodo actualizar
            const { nombre } = req.params;
            try {
                const curso = yield database_1.Mysql.query('SELECT * FROM cursos WHERE profesor = ?', [nombre]);
                if (curso.length > 0) {
                    return res.json(curso[0]);
                }
                res.status(404).json({ text: "The user doesn't exists" });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    //---------------------------------METODOS COMENTARIOS---------------------------------------------------------------
    crearcomentario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query('INSERT INTO comentarios set ?', [req.body]);
                res.json({
                    message: 'coment Saved',
                });
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        });
    }
    traercoment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comen = yield database_1.Mysql.query('SELECT * FROM comentarios');
                res.json(comen[0]);
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    deletecom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //creando un metodo delete
            const { id } = req.params;
            try {
                yield database_1.Mysql.query('DELETE FROM comentarios WHERE id = ?', [id]);
                res.json({ message: 'The comentari was deleted' });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    onecoment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo } = req.params;
            try {
                const comen = yield database_1.Mysql.query('SELECT * FROM comentarios WHERE titulo = ?', [titulo]);
                if (comen.length > 0) {
                    return res.json(comen[0]);
                }
                res.status(404).json({ text: "The user doesn't exists" });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    onecoment_prof(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            try {
                const comen = yield database_1.Mysql.query('SELECT * FROM comentarios WHERE nombre = ?', [nombre]);
                if (comen.length > 0) {
                    return res.json(comen[0]);
                }
                res.status(404).json({ text: "The user doesn't exists" });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //creando un metodo actualizar
            const { id } = req.params;
            try {
                yield database_1.Mysql.query('UPDATE comentarios set ? WHERE id = ?', [
                    req.body,
                    id,
                ]);
                res.json({ message: 'The user was updated' });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    //------------------------------------------------------------------------------------------------------------------------//
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //creando un metodo delete
            const { id } = req.params;
            try {
                yield database_1.Mysql.query('DELETE FROM cursos WHERE id = ?', [id]);
                res.json({ message: 'The cursos was deleted' });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
    getcursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const users = yield database_1.Mysql.query('SELECT * FROM users WHERE id = ?', [id]);
                if (users.length > 0) {
                    return res.json(users[0]);
                }
                res.status(404).json({ text: "The user doesn't exists" });
            }
            catch (error) {
                console.log('Error db: ' + error);
            }
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
