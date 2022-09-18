import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameFormComponent} from './components/game-form/game-form.component';
import {LoginComponent} from './components/login/login.component';


//DONDE SE CREAN LAS RUTAS
const routes: Routes = [
  {
    path: ' ',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',                          //para que abra a las demas ventanas o dirrecciones
    component:  GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'Login', 
    component: LoginComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
