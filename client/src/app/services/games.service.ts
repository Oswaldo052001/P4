import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/Users'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  API_URI = 'http://localhost:3000/api';         //DIRENCCION DEL SERVIDOR //###########

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}/users`);
  }

  getGame(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveNewUser(user: User){
    return this.http.post(`${this.API_URI}/login/creat/`,user);
   
  }

  updateGame(id: string, updatedGame: User): Observable<User>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }


}
