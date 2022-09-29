import { Component, OnInit } from '@angular/core'
import { coment, respuesta } from 'src/app/models/Users'
import { UsersService } from 'src/app/services/users.service'

@Component({
    selector: 'app-pagina-principal',
    templateUrl: './pagina-principal.component.html',
    styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent implements OnInit {
    constructor(public userService: UsersService) {}

    nombre = ''
    algo = ' '
    usuarios = localStorage.getItem('usuarioensesion')
    coment: respuesta = {
        id: 0,
        respuestas: ' ',
    }
    dataComents: any = []

    ngOnInit() {
        this.userService.traercoment().subscribe(
            (res) => {
                this.dataComents = res
            },
            (err) => console.log(err),
        )
    }
    obtid(id: string) {
        console.log(id)
    }
    obsdata1() {
        this.dataComents = []
        this.userService.traercoment2(this.nombre).subscribe(
            async (res: any) => {
                res.forEach((datos: any) => {
                    this.dataComents.push(datos)
                })
            },
            (err) => console.log(err),
        )
    }

    // updatecoment(id: string, this.algo:any) {
    //     this.userService.resp_coment(this.coment.id, this.algo).subscribe(
    //         (res) => {
    //             console.log(res)
    //             console.log(id)
    //         },
    //         (err) => console.error(err),
    //     )
    // }
    obsdata2() {
        this.dataComents = []
        this.userService.traercoment3(this.nombre).subscribe(
            async (res: any) => {
                res.forEach((datos: any) => {
                    this.dataComents.push(datos)
                })
            },
            (err) => console.log(err),
        )
    }

    obsdata3() {
        this.userService.traercoment().subscribe(
            (res) => {
                this.dataComents = res
            },
            (err) => console.log(err),
        )
    }
}
