import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {

  title = 'funciones works!'
  constructor() { }

  ngOnInit() {
    this.getName()
  }

  getName(){
    return 'nombre'
  }

  suma(a: number, b: number):number {
    if(a < 0) return 0
    return a + b
  }

}
