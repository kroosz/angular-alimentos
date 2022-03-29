import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { DetallePlatilloComponent } from './Components/detalle-platillo/detalle-platillo.component';
import { IngredientesPopularesComponent } from './Components/ingredientes-populares/ingredientes-populares.component';
import { LoginComponent } from './Components/login/login.component';
import { PerfilUsuarioComponent } from './Components/perfil-usuario/perfil-usuario.component'
import { PlatillosIngredienteComponent } from './Components/platillos-ingrediente/platillos-ingrediente.component';
import { PlatillosComponent } from './Components/platillos/platillos.component';

import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [LoginGuard]},
  {path: 'ingredientes-populares', component: IngredientesPopularesComponent, canActivate: [LoginGuard]},
  {path: 'platillos-ingrediente', component: PlatillosIngredienteComponent, canActivate: [LoginGuard]},
  {path: 'detalle-platillo', component: DetallePlatilloComponent, canActivate: [LoginGuard]},
  {path: 'platillos', component: PlatillosComponent, canActivate: [LoginGuard]},
  {path: 'bienvenida', component: BienvenidaComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
