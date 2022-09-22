import { Component, HostBinding ,OnInit } from '@angular/core';

import {GamesService} from '../../services/games.service';
import {Router, ActivatedRoute} from '@angular/router';
import { userLog } from 'src/app/models/Users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  user: userLog | any = {          //CAMBIAR VALORES 
    carne: '',
    contrasena: ''
  };

  estado: boolean = false;


  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.login();
  }    

    login(){               
                       //GUARDANDO UN JUEGO
      this.gamesService.singin(this.user)      
       .subscribe(
        res => {
          let isEmpty = Object.entries(res).length === 0;
          if(isEmpty == true){
            console.log("valores ingresados de forma incorrecta")
          }else{
            console.log("valores ingresados de forma correcta")
            this.router.navigate(['/pageP'])
            localStorage.setItem("usuarioensesion", this.user.carne);
          }
         
        
        },
       )
  
    };

}
