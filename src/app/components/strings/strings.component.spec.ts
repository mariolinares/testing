import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsComponent } from './strings.component';
import { not } from '@angular/compiler/src/output/output_ast';

describe('StringsComponent', () => {
  let component: StringsComponent;
  let fixture: ComponentFixture<StringsComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringsComponent ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(StringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Probar que contiene Hola Mundo', () => {
    const myVar = component.titulo
    expect(myVar).toContain('Hola Mundo')
  })
  
  it('Probar que la descripción es igual a ', () => {
    const nombre = component.descripcion
    expect(nombre).toEqual('BNP');
  })
  
  it('Probar que la variable sección está definida', () => {
    const nombre = component.seccion
    expect(nombre).toBeDefined()
  })
  
  it('Probar que la variable sección está definida', () => {
    const nombre = component.seccion
    expect(nombre).toBeDefined()
  })
  
  it('Probar que la variable tiene menos de 10 caracteres', () => {
    const nombre = component.seccion
    expect(nombre.length).toBeLessThan(10)
  })
  
  it('Probar que la variable sección no tienes menos de 7 caracteres', () => {
    const nombre = component.seccion
    expect(nombre).not.toBeLessThan(7)
  })
  
  it('Probar que la variable sección no es falsa', () => {
    const nombre = component.seccion
    expect(nombre).not.toBeFalsy()
  })
  
  it('Probar que la variable otra está indefinida', () => {
    const nombre = component.otra
    expect(nombre).toBeUndefined()
  })
  
  it('Probar que la variable no es un número', () => {
    const nombre = component.str
    expect(nombre).not.toBeNaN()
  })
});
