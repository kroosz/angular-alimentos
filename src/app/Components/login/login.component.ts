import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/Login/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DatosUsuario } from 'src/app/Interfaces/login.interface';
import { datosUsuario } from 'src/app/Estados/Acciones/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // TODO: VARIABLES INICIALES
  ocultarPass = true;
  formularioLogin: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private log: LoginService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.obtenerDatosCredenciales();
  }
  inicializarFormulario(): void {
    this.formularioLogin = this.fb.group({
      usuario: ['', Validators.required],
      contrasenia: ['', [Validators.required, Validators.minLength(3)]],
      recordarCredenciales: [false]
    });
  }
  obtenerDatosCredenciales(): void {
    const credenciales = localStorage.getItem('credenciales');
    if (credenciales !== null) {
      this.formularioLogin.patchValue({
        usuario: JSON.parse(credenciales).user,
        contrasenia: JSON.parse(credenciales).pass,
        recordarCredenciales: true
      });
    }
  }
  iniciarSesion(): void {
    this.log.iniciarSesion(this.formularioLogin.value.usuario, this.formularioLogin.value.contrasenia).subscribe((res) => {
      if (res[0].success) {
        const usuario: Array<DatosUsuario> = [{
          nombre: 'José',
          apellidoPaterno: 'García',
          apellidoMaterno: 'Mejía',
          fechaNacimiento: '27/04/1989',
          correoElectronico: 'jose.garciamja@gmail.com',
          telefono: '55 2812 8667',
          ciudad: 'Ciudad de México',
          delegacion: 'Polanco',
          fechaRegistro: '28/02/2022'
        }]
        this.store.dispatch(datosUsuario({usuario: usuario}));
        if (this.formularioLogin.value.recordarCredenciales) {
          localStorage.setItem('credenciales', JSON.stringify({user: this.formularioLogin.value.usuario, pass: this.formularioLogin.value.contrasenia}));
        } else {
          localStorage.removeItem('credenciales');
        }
        this.log.logeado = true;
        Swal.fire({
          icon: 'success',
          html: '¡Bienvenido/a de nuevo <b>'+usuario[0].nombre+'</b>!',
          showCloseButton: true,
          showConfirmButton: false
        });
        this.router.navigate(['/bienvenida']);
      } else {
        Swal.fire({
          icon: 'warning',
          html: `${res[0].msg}, favor de volver a intentarlo`,
          showConfirmButton: false,
          showCloseButton: true
        });
      }
    });
  }
}
