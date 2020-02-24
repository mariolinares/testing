import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesComponent } from './funciones.component';
import { Observable as of, Observable } from 'rxjs';

describe('FuncionesComponent', () => {
  let component: FuncionesComponent;
  let fixture: ComponentFixture<FuncionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(FuncionesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('funciones works!');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el método getName() debe estár definido', () => {
    let f = component.getName();
    expect(f).toBeDefined();
  })

  it('el método getName() debe retornar un nombre', () => {
    let f = component.getName();
    expect(f).toContain('nombre');
  })

  it('el método getName() debe ser llamado en el onInit', () => {
    const data = spyOn(component, 'getName')
    component.ngOnInit()

    expect(data).toHaveBeenCalled();
  })


  it('funcion suma' , () => {
    const suma = component.suma(4,5)
    expect(suma).toBe(9)
  })

  it('funcion suma' , () => {
    const suma = component.suma(-1,5)
    expect(suma).toBe(0)
  })
});
