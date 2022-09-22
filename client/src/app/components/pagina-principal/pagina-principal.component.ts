import { Component, OnInit } from '@angular/core';
import {Cursos} from 'src/app/models/Users';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(public userService:UsersService) {

   }

  nombre= "";
  usuarios= localStorage.getItem("usuarioensesion");
  datoscurso: Cursos[]=[];

  ngOnInit(): void{
  }

  obtenercursos(){
    this.datoscurso=[];
    this.userService.traercursos().subscribe(async (res:any) =>{
      let valores: any = res;
      this.datoscurso=valores
    },
      err => console.log(err));
  }

  obcurso(){
    this.datoscurso=[];
    this.userService.traercuso(this.nombre).subscribe(async (res:any) =>{
      res.forEach((valores: Cursos) => {
        this.datoscurso.push(valores);
      });
    },
      err=>console.log(err));
  }

  obcate(){
    this.datoscurso=[];
    this.userService.treaercate(this.nombre).subscribe(async (res:any)=>{
      res.forEach((valores: Cursos) => {
        this.datoscurso.push(valores);
      });
    },
    err=>console.log(err));
  }

}
