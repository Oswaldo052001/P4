import { Component, OnInit } from '@angular/core'
import { async } from '@angular/core/testing'
import { Cursos } from 'src/app/models/Users'
import { User } from 'src/app/models/Users'
import { UsersService } from 'src/app/services/users.service'

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
    usuarios = localStorage.getItem('usuarioensesion')
    dataUsers: User[] = []

    constructor(public userService: UsersService) {}

    ngOnInit(): void {}

    obsData() {
        this.dataUsers = []
        this.userService.dataUser(this.usuarios).subscribe(async (res: any) => {
            res.forEach((datos: User) => {
                this.dataUsers.push(datos)
            })
        })
    }
}
