import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obtenerPaises(excluir?){
    if(excluir === 'España') return [ 'Italia', 'Francia']
    if(excluir === 'Italia') return [ 'España', 'Francia']
    if(excluir === 'Francia') return [ 'España', 'Italia']
    
    return [ 'España', 'Italia', 'Francia' ]
  }


  comprobarArray(array){
    return (array.length <= 0) ? 'error' : array.length
  }

  

}
