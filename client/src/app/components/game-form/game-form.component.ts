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
    contraseña: '',
    correo: '',
    created_at: new Date() 

  };

  edit: boolean = false;


  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    const params = this.activatedRoute.snapshot.params;

    if (params['id']){
      this.gamesService.getGame(params['id'])
      .subscribe(
        res => {

        console.log(res);
        this.user = res;
        this.edit = true;

        for (let user of this.user){
          this.user = user 
        }
        },
        err => console.log(err)
      )
    }

  }

  saveNewGame(){                                //GUARDANDO UN JUEGO
    delete this.user.created_at;
    delete this.user.id;
    
    this.gamesService.saveNewUser(this.user)      
     .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login'])        //CUANDO SE GUARDE EL JUEGO SE MANDA A LA RUTA 
      },
      
     )

  };

  updateGame(){  
    delete this.user.created_at;               //ACTUALIZANDO UN JUEGO
    this.gamesService.updateGame(this.user.id, this.user)
    .subscribe(
      res =>{
        console.log(res);  
      }
    )
    
  }


}
