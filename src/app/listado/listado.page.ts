import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  listado : any;
  constructor() {
    this.listado = [
      {
        id    : 1,
        nombre: 'Juan',
        edad  : 20,
        foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
      },      
      {
        id    : 2,
        nombre: 'Ana',
        edad  : 20,
        foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'
      },
      {
        id    : 3,
        nombre: 'Pedro',
        edad  : 40,
        foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'
      },
    ];

   }

  ngOnInit() {
  }

}
