import {Request, Response} from 'express';
//import pool from "../database";
import { Mysql } from "../database";

class GamesController {

    public async list(req: Request, res: Response) {
        try {
          const games = await Mysql.query("SELECT * FROM games");
          //console.log(games);   PARA MOSTRAR EN CONSOLA
          res.json(games[0]);
        } catch (error) {
          console.log("Error db: " + error);
        }
    }

    public async getjuego(req: Request, res: Response): Promise <any> {
        const { id } = req.params;
        try {
            const games = await Mysql.query('SELECT * FROM games WHERE id = ?', [id]);
            if (games.length > 0){
                return res.json(games[0]);
            }
            res.status(404).json({text: "The game doesn't exists"});

          } catch (error) {
            console.log("Error db: " + error);
          } 
    } 

    public async create(req: Request, res: Response) {
        try {
          await Mysql.query("INSERT INTO games set ?", [req.body]);
          res.json({
            message: "Game Saved",
          });
        } catch (error) {
          console.log("Error: " + error);
        }
    }
      

    public async update(req: Request, res: Response){          //creando un metodo actualizar
      const { id } = req.params;
      try {
          await Mysql.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
          res.json({message: "The game was updated"});

        } catch (error) {
          console.log("Error db: " + error);
        }  
    }



    public async delete(req: Request, res: Response){          //creando un metodo delete
        const { id } = req.params;
        try {
            await Mysql.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({message: "The game was deleted"});

          } catch (error) {
            console.log("Error db: " + error);
          } 
    }

}

const gamesController = new GamesController();
export default gamesController;