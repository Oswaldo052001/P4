import {Request, Response} from 'express';
//import pool from "../database";
import { Mysql } from "../database";

class UsersController {


//-------------------------------------------------- METODOS DE LOS USUARIOS--------------------------------------------

    public async list(req: Request, res: Response) {
        try {
          const users = await Mysql.query("SELECT * FROM users");
          //console.log(games);   PARA MOSTRAR EN CONSOLA
          res.json(users[0]);
        } catch (error) {
          console.log("Error db: " + error);
        }
    }

    public async createUsuario(req: Request, res: Response) {
      try {
        await Mysql.query("INSERT INTO users set ?", [req.body]);
        res.json({
          message: "User Saved",
        });
      } catch (error) {
        console.log("Error: " + error);
      }
  }

  public async singin(req: Request, res: Response){        
    const {carne, contrasena} = req.body;
    try {
        const valores = await Mysql.query('SELECT * from users WHERE carne=? and contrasena=?',[carne,contrasena],)
        
        if(valores.length > 0){
          return res.json(valores[0]);

        }
         
        return res.status(404).json({text: "The user doesn't exists"});
        
    } catch (error) {
      console.log("Error db: " + error);
    } 

}

  //---------------------------------------------------METODOS DE LOS CURSOS-----------------------------------------------


    public async mostrarCursos(req: Request, res: Response) {
      try {
        const cursos = await Mysql.query("SELECT * FROM cursos");
        //console.log(games);   PARA MOSTRAR EN CONSOLA
        res.json(cursos[0]);
      } catch (error) {
        console.log("Error db: " + error);
      }
  }

      
    public async createCurso(req: Request, res: Response) {
      try {
        await Mysql.query("INSERT INTO cursos set ?", [req.body]);
        res.json({
          message: "Curso Saved",
        });
      } catch (error) {
        console.log("Error: " + error);
      }
  }

  public async darnombrecurso(req: Request, res: Response): Promise<any> {
    const { nombre } = req.params;
    try {
      const curso = await Mysql.query('SELECT * FROM cursos WHERE nombre_curso = ?', [nombre]);
      if (curso.length > 0) {
        return res.json(curso[0]);
      }
      res.status(404).json({ text: "The user doesn't exists" });
  
    } catch (error) {
      console.log("Error db: " + error);
    }
  }


  public async darnombrecatedratico(req: Request, res: Response): Promise<any> {          //creando un metodo actualizar
    const { nombre } = req.params;
    try {
      const curso = await Mysql.query('SELECT * FROM cursos WHERE profesor = ?', [nombre]);
      if (curso.length > 0) {
        return res.json(curso[0]);
      }
      res.status(404).json({ text: "The user doesn't exists" });

    } catch (error) {
      console.log("Error db: " + error);
    }
  }

//------------------------------------------------------------------------------------------------------------------------//

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

    public async getcursos(req: Request, res: Response): Promise <any> {
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

}

const usersController = new UsersController();
export default usersController;