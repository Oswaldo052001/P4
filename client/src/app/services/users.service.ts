import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { coment, User, userLog } from '../models/Users'

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    API_URI = 'http://localhost:3000/api' //DIRENCCION DEL SERVIDOR //###########
    usuarios = localStorage.getItem('usuarioensesion')
    constructor(private http: HttpClient) {}

    //------------------------------------------------------ METODOS DE USUARIOS ----------------------------------------------

    getUsers() {
        return this.http.get(`${this.API_URI}/users`)
    }

    singin(user: userLog) {
        return this.http.post(`${this.API_URI}/users/singin/`, user)
    }

    saveNewUser(user: User) {
        return this.http.post(`${this.API_URI}/users/`, user)
    }

    dataUser(carne: string | null | number) {
        return this.http.get(`${this.API_URI}/users/${carne}`)
    }
    //------------------------------------------------------ METODOS DE CURSOS ----------------------------------------------
    traercursos() {
        return this.http.get(`${this.API_URI}/users/cate/cursos`)
    }

    traercuso(nombre: string) {
        return this.http.get(`${this.API_URI}/users/cursos/${nombre}`)
    }

    treaercate(nombre: string) {
        return this.http.get(`${this.API_URI}/users/cursos/cate/${nombre}`)
    }
    //------------------------------------------------------ METODOS DE COMENTARIOS ----------------------------------------------

    nuevocoment(titulo: string) {
        return this.http.post(`${this.API_URI}/users/cursos/coment/`, titulo)
    }

    traercoment() {
        return this.http.get(`${this.API_URI}/users/cate/cursos/coment/`)
    }

    traercoment2(nombre: string) {
        return this.http.get(
            `${this.API_URI}/users/cate/cursos/coment/${nombre}`,
        )
    }
    resp_coment(id: string | number, updateComent: string) {
        return this.http.put(
            `${this.API_URI}/users/cursos/coment/${id}`,
            updateComent,
        )
    }
    traercoment3(nombre: string) {
        return this.http.get(`${this.API_URI}/users/cursos/coment/${nombre}`)
    }
}
