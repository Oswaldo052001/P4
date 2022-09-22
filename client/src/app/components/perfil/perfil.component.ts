import { Component, OnInit } from '@angular/core';
import {Cursos} from 'src/app/models/Users';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( public userService:UsersService) { }

  usuarios= localStorage.getItem("usuarioensesion");
  datoscurso: Cursos[]=[];

  ngOnInit(): void {
  }

  obtenercursos(){
    this.datoscurso=[];
    this.userService.traercursos().subscribe(async (res:any) =>{
      let valores: any = res;
      this.datoscurso=valores
    },
      err => console.log(err));
  }
}
