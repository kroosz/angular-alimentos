import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { datosUsuario } from 'src/app/Estados/Selectores/login.selector';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  // TODO: VARIABLES INICIALES
  estadoMenu: string = '';

  // TODO: VARIABLES GENERALES
  nombreCompleto: string = '';
  iniciales: string = '';
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  fechaNacimiento: string = '';
  correoElectronico: string = '';
  telefono: string = '';
  ciudad: string = '';
  delegacion: string = '';
  fechaRegistro: string = '';

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }
  obtenerDatosUsuario(): void {
    this.store.select(datosUsuario).subscribe((res) => {
      this.nombre = res[0].nombre;
      this.apellidoPaterno = res[0].apellidoPaterno;
      this.apellidoMaterno = res[0].apellidoMaterno;
      this.fechaNacimiento = res[0].fechaNacimiento;
      this.correoElectronico = res[0].correoElectronico;
      this.telefono = res[0].telefono;
      this.ciudad = res[0].ciudad;
      this.delegacion = res[0].delegacion;
      this.fechaRegistro = res[0].fechaRegistro;
      this.nombreCompleto = this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
      this.iniciales = this.nombre.substring(0, 1) + this.apellidoPaterno.substring(0, 1);
    });
  }
  cambiarTamanioMenu(evt: string): void {
    this.estadoMenu = evt
  }
  cerrarSesion(): void {
    let date = new Date();
    let hora = date.getHours();
    if(hora <= 12) {
      let msg = '¡Buen Día!';
      this.modalDespedida(msg);
    } else if (hora > 12 && hora <= 18) {
      let msg = '¡Buena Tarde!';
      this.modalDespedida(msg);
    } else if (hora > 18 && hora <= 24) {
      let msg = '¡Buena Noche!';
      this.modalDespedida(msg);
    }
  }
  modalDespedida(msg: string): void {
    this.router.navigate(['/login']);
    Swal.fire({
      icon: 'success',
      html: '¡Esperamos tenerte de vuelta pronto! &#128522 <br><br> <b>'+msg+'</b> '
    })
  }
}
