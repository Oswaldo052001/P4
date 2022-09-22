import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, userLog} from '../models/Users'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GamesService {

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


}
