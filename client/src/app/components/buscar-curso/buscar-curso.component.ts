import { Component, OnInit } from '@angular/core'
import { Cursos } from 'src/app/models/Users'
import { UsersService } from 'src/app/services/users.service'
@Component({
    selector: 'app-buscar-curso',
    templateUrl: './buscar-curso.component.html',
    styleUrls: ['./buscar-curso.component.css'],
})
export class BuscarCursoComponent implements OnInit {
    constructor(private userService: UsersService) {}
    dataCursos: any = []
    ngOnInit() {
        this.dataCursos = []
        this.userService.traercursos().subscribe(
            (res) => {
                this.dataCursos = res
            },
            (err) => console.log(err),
        )
    }
}
