import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from 'src/app/models/Users';

import {GamesService} from '../../services/games.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

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


  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.gamesService.getUsers().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    
  
    const params = this.activatedRoute.snapshot.params;
  }

  saveNewUser(){                                //GUARDANDO UN JUEGO
    delete this.user.created_at;
    delete this.user.id;
    console.log(this.user)

    this.gamesService.saveNewUser(this.user)      
     .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Login'])        //CUANDO SE GUARDE EL JUEGO SE MANDA A LA RUTA 
      },
     )

  };


}
