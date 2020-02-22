import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.calcularSaldo('dfdf')
  }

  multiplicar(n){
    console.log(n * 2);
    if(n < 0) return 0
    return n * 2;
  }

  calcularSaldo(parametro){
    if(isNaN(parametro)) return this.error()
    return this.ok(parametro)
  }

  ok(parametro){
    console.log(parametro * 100);
    return parametro * 100
  }

  error(){
    console.log('Debe introducir un número');
    return 'Debe introducir un número'
  }

}
