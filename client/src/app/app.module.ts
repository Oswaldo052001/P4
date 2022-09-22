import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';


import { GamesService } from './services/games.service';
import { LoginComponent } from './components/login/login.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    LoginComponent,
    RecuperarCuentaComponent,
    PaginaPrincipalComponent,
    PerfilComponent,
    PublicacionesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
