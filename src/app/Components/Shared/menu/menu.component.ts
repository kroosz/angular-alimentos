import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstadoMenu } from 'src/app/Interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // TODO: VARIABLE INICIAL
  @Output () tamanioMenu = new EventEmitter();
  toggle = false;
  estadoMenu = EstadoMenu.desactivado;

  constructor() { }

  ngOnInit(): void {
  }
  guardarMenu(): void {
    switch(this.toggle) {
      case false:
        this.toggle = true;
        this.estadoMenu = EstadoMenu.activo;
        this.tamanioMenu.emit(EstadoMenu.activo);
        break;
      case true:
        this.toggle = false;
        this.estadoMenu = EstadoMenu.desactivado;
        this.tamanioMenu.emit(EstadoMenu.desactivado);
        break;
    }
  }
}
