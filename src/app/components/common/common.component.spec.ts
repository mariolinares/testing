import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponent } from './common.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CommonComponent', () => {
  let component: CommonComponent;
  let fixture: ComponentFixture<CommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Comprobar que calcularSaldo se inicializa en el onInit()', () => {
    const spy = spyOn(component, 'calcularSaldo');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled()
  })

  it('Comprobar que cuando recibe un número llama a la funcion ok', () => {
    const n = 20
    const spy = spyOn(component, 'ok');

    component.calcularSaldo(n)
    expect(spy).toHaveBeenCalled()
  })


  it('Comprobar que cuando recibe un string llama a la funcion error', () => {
    const n = 'Hola mundo';
    const spy = spyOn(component, 'error');
    component.calcularSaldo(n)
    expect(spy).toHaveBeenCalled();
  })

  it('Debe resolver la funcion ok con una multilplicacion', () => {
    const d = component.ok(10)
    expect(d).toBe(1000)
  })

});
