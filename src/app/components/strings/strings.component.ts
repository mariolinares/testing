import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements OnInit {

  titulo = 'Hola Mundo';
  descripcion = 'BNP';
  seccion = 'Cartelera'
  otra: any;
  str = 'String'

  constructor() { }

  ngOnInit() {

  }



}
