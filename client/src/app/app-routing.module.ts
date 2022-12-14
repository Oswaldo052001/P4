import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserFormComponent } from './components/user-form/user-form.component'
import { LoginComponent } from './components/login/login.component'
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component'
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component'
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component'
import { PerfilComponent } from './components/perfil/perfil.component'
import { BuscarUsComponent } from './components/buscar-us/buscar-us.component'
import { BuscarCursoComponent } from './components/buscar-curso/buscar-curso.component'

//DONDE SE CREAN LAS RUTAS
const routes: Routes = [
    {
        path: '',
        redirectTo: '/Login',
        pathMatch: 'full',
    },

    //---------------------------------------------- URL USUARIOS -------------------------------------------------
    {
        path: 'Login',
        component: LoginComponent,
    },

    {
        path: 'Login/creat',
        component: UserFormComponent,
    },

    {
        path: 'Login/recuperar',
        component: RecuperarCuentaComponent,
    },

    {
        path: 'Login/pageP/users',
        component: BuscarUsComponent,
    },

    // ----------------------------------------------------- URL CURSOS--------------------------------------------------

    {
        path: 'pageP',
        redirectTo: '/pageP',
        pathMatch: 'full',
    },
    {
        path: 'Login/pageP/cursos',
        component: BuscarCursoComponent,
    },

    {
        path: 'pageP',
        component: PaginaPrincipalComponent,
    },
    {
        path: 'pageP/publi',
        component: PublicacionesComponent,
    },
    {
        path: 'pageP/miP',
        component: PerfilComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
