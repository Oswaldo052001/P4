import {Request, Response} from 'express';
//import pool from "../database";
import { Mysql } from "../database";

class GamesController {

    public async list(req: Request, res: Response) {
        try {
          const users = await Mysql.query("SELECT * FROM users");
          //console.log(games);   PARA MOSTRAR EN CONSOLA
          res.json(users[0]);
        } catch (error) {
          console.log("Error db: " + error);
        }
    }

    public async getjuego(req: Request, res: Response): Promise <any> {
        const { id } = req.params;
        try {
            const users = await Mysql.query('SELECT * FROM users WHERE id = ?', [id]);
            if (users.length > 0){
                return res.json(users[0]);
            }
            res.status(404).json({text: "The user doesn't exists"});

          } catch (error) {
            console.log("Error db: " + error);
          } 
    } 

    public async create(req: Request, res: Response) {
        try {
          await Mysql.query("INSERT INTO users set ?", [req.body]);
          res.json({
            message: "User Saved",
          });
        } catch (error) {
          console.log("Error: " + error);
        }
    }
      

    public async update(req: Request, res: Response){          //creando un metodo actualizar
      const { id } = req.params;
      try {
          await Mysql.query('UPDATE users set ? WHERE id = ?', [req.body, id]);
          res.json({message: "The user was updated"});

        } catch (error) {
          console.log("Error db: " + error);
        }  
    }



    public async delete(req: Request, res: Response){          //creando un metodo delete
        const { id } = req.params;
        try {
            await Mysql.query('DELETE FROM users WHERE id = ?', [id]);
            res.json({message: "The user was deleted"});

          } catch (error) {
            console.log("Error db: " + error);
          } 
    }

}

const gamesController = new GamesController();
export default gamesController;