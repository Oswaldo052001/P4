import { Component, HostBinding, OnInit } from '@angular/core';
import { nuevoc,coment } from 'src/app/models/Users';
import {UsersService} from '../../services/users.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: nuevoc | any = {          //CAMBIAR VALORES 
    titulo: '',
    contenido: '',
    created_at: new Date()
  };
  edit: boolean = false;

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }
  cont=""
  tit=""
  datoscoment: coment[]=[];
  usuarios= localStorage.getItem("usuarioensesion");
  ngOnInit(): void {
    this.userService.traercoment().subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    const params = this.activatedRoute.snapshot.params;
  }
  nuevocoment(){                                
    delete this.user.created_at;
    delete this.user.id;
    console.log(this.user)
    this.userService.nuevocoment(this.user)      
     .subscribe(
      res => {
        console.log(res);       
      },
     )
  };
  obtenercoment(){
    this.datoscoment=[];
    this.userService.traercoment().subscribe(async (res:any) =>{
      let valores: any = res;
      this.datoscoment=valores
    },
      err => console.log(err));
  }
  

}
