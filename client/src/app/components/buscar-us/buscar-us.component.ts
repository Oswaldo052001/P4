import { Component, OnInit } from '@angular/core'
import { UsersService } from '../../services/users.service'
import { User } from '../../models/Users'
@Component({
    selector: 'app-buscar-us',
    templateUrl: './buscar-us.component.html',
    styleUrls: ['./buscar-us.component.css'],
})
export class BuscarUsComponent implements OnInit {
    constructor(private userService: UsersService) {}
    nombre = ''
    dataUsers: any = []
    ngOnInit() {}
    obsdata() {
        this.dataUsers = []
        this.userService.dataUser(this.nombre).subscribe(
            async (res: any) => {
                res.forEach((datos: any) => {
                    this.dataUsers.push(datos)
                })
            },
            (err) => console.log(err),
        )
    }
}
