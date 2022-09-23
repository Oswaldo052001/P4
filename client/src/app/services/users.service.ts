import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, userLog} from '../models/Users';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  API_URI = 'http://localhost:3000/api';         //DIRENCCION DEL SERVIDOR //###########

  constructor(private http: HttpClient) { }


//------------------------------------------------------ METODOS DE USUARIOS ----------------------------------------------
  
  getUsers(){
    return this.http.get(`${this.API_URI}/users`);
  }

  singin(user: userLog){
    return this.http.post(`${this.API_URI}/users/singin/`, user);
  }

  saveNewUser(user: User){
    return this.http.post(`${this.API_URI}/users/`,user);
  }

//------------------------------------------------------ METODOS DE CURSOS ----------------------------------------------
  traercursos(){
    return this.http.get(`${this.API_URI}/users/cursos`);
  }

  traercuso(nombre: string){
    return this.http.get(`${this.API_URI}/users/cursos/${nombre}`);
  }

  treaercate(nombre: string){
    return this.http.get(`${this.API_URI}/users/cursos/cate/${nombre}`);
  }
  //------------------------------------------------------ METODOS DE COMENTARIOS ----------------------------------------------

  nuevocoment(titulo: string){
    return this.http.post(`${this.API_URI}/users/cursos/coment/`,titulo);
  }

  traercoment(){
    return this.http.get(`${this.API_URI}/users/cursos/coment/`);
  }

}
