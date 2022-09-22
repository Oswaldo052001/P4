import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user-form/user-form.component';


import { UsersService } from './services/users.service';
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
    UserFormComponent,
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
    UsersService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
