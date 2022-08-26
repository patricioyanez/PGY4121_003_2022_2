import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre  : String;
  apellido: String;
  correo  : String;
  mensaje : String;
  constructor() { }

  ngOnInit() {
  }
  grabar(nom: HTMLInputElement, ape: HTMLInputElement, correo: HTMLInputElement)
  {
    if(nom.value == "")
    {
      this.mensaje = "Falta el nombre";
    }
    // TAREA: validar los demás datos :)
  }
  limpiar()
  {
    
  }
}
