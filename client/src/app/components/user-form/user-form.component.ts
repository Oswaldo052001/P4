import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from 'src/app/models/Users';

import {UsersService} from '../../services/users.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User | any = {          //CAMBIAR VALORES 
    id: 0,
    carne: '',
    nombre: '',
    apellido: '',
    contrasena: '',
    correo: '',
    created_at: new Date() 

  };

  edit: boolean = false;


  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    
  
    const params = this.activatedRoute.snapshot.params;
  }

  saveNewUser(){                                //GUARDANDO UN JUEGO
    delete this.user.created_at;
    delete this.user.id;
    console.log(this.user)

    this.userService.saveNewUser(this.user)      
     .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Login'])        //CUANDO SE GUARDE EL JUEGO SE MANDA A LA RUTA 
      },
     )

  };


}
