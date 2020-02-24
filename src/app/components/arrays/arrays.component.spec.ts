import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysComponent } from './arrays.component';

describe('ArraysComponent', () => {
  let component: ArraysComponent;
  let fixture: ComponentFixture<ArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente arrays ha sido creado', () => {
    expect(component).toBeTruthy();
  });

  it('Obtener listado de paises disponibles si no hay ninguna exclusion', () => {
    const paises = component.obtenerPaises();
    expect(paises).toContain('España')
    expect(paises).toContain('Italia')
    expect(paises).toContain('Francia')
  })

  it('Obtener listado de paises disponibles si excluimos a españa', () => {
    const paises = component.obtenerPaises('España');
    expect(paises).toContain('Italia')
    expect(paises).toContain('Francia')
  })

  it('Obtener listado de paises disponibles si excluimos a Italia', () => {
    const paises = component.obtenerPaises('Italia');
    expect(paises).toContain('España')
    expect(paises).toContain('Francia')
  })

  it('Obtener listado de paises disponibles si excluimos a Francia', () => {
    const paises = component.obtenerPaises('Francia');
    expect(paises).toContain('España')
    expect(paises).toContain('Italia')
  })


  it('Comprobar que si enviamos un array vacio retorna un mensaje de error', () => {
    const array = []
    const f = component.comprobarArray(array)
    expect(f).toEqual('error')
  })

  it('Comprobar que si enviamos un array a la funcion comprobarArray retorna el número de elementos', () => {
    const array = [1,2,3]
    const f = component.comprobarArray(array)
    expect(f).toEqual(3)
  })
});
