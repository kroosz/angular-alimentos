import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './Material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './Estados/app.estados';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/Shared/menu/menu.component';
import { PerfilUsuarioComponent } from './Components/perfil-usuario/perfil-usuario.component';
import { IngredientesPopularesComponent } from './Components/ingredientes-populares/ingredientes-populares.component';
import { PlatillosIngredienteComponent } from './Components/platillos-ingrediente/platillos-ingrediente.component';
import { DetallePlatilloComponent } from './Components/detalle-platillo/detalle-platillo.component';
import { PlatillosComponent } from './Components/platillos/platillos.component';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PerfilUsuarioComponent,
    IngredientesPopularesComponent,
    PlatillosIngredienteComponent,
    DetallePlatilloComponent,
    PlatillosComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
