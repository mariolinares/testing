import { CommonComponent } from './components/common/common.component';
import { User } from './models/user.interface';
import { Observable, of } from 'rxjs';
import { UsersService } from './services/users.service';
import { TestBed, ComponentFixture,  async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  let appComp;
  let servicio;

  beforeAll(() => {
    console.log('beforeAll')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  afterEach(() => {
    console.log('afterEach')
  })

  beforeEach(async(() => {

    let orej;

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule      ],
      declarations: [
        AppComponent,
        CommonComponent
      ],
      providers: [
        UsersService,
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
    appComp = TestBed.get(AppComponent);
    servicio = TestBed.get(UsersService)
  }));


  it('Comprobar que el array peliculas está definido', () => {
    expect(appComp.peliculas).toBeDefined()
  })

  it('Crear el componente AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  // Probar que contiene
  it('Probar que contiene Mario', () => {
    const myVar = appComp.myVar
    expect(myVar).toContain('Mario')
  })

  // Probar que es igual
  it('Probar que es igual a Laura', () => {
    const nombre = appComp.nombre
    expect(nombre).toEqual('Laura');
  })

  // Probar que es retorna TRUE
  it('Comprobar que retorna TRUE', ( ) => {
    const isTrue = appComp.par(10);
    expect(isTrue).toBeTruthy()
  })

  // Probar que es retorna FALSE
  it('Comprobar que retorna FALSE', ( ) => {
    const isFalse = appComp.par(21);
    expect(isFalse).toBeFalsy()
  })

  it('Debe llamar al servicio y el método getAll() para obtener usuarios', () => {
    const mockUser: User[] = [
      {
        login: 'mojombo',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo',
        followers_url: 'https://api.github.com/users/mojombo/followers',
        following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
        gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
        organizations_url: 'https://api.github.com/users/mojombo/orgs',
        repos_url: 'https://api.github.com/users/mojombo/repos',
        events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
        received_events_url: 'https://api.github.com/users/mojombo/received_events',
        type: 'User',
        site_admin: false
      },
      {
        login: 'defunkt',
        id: 2,
        node_id: 'MDQ6VXNlcjI=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/defunkt',
        html_url: 'https://github.com/defunkt',
        followers_url: 'https://api.github.com/users/defunkt/followers',
        following_url: 'https://api.github.com/users/defunkt/following{/other_user}',
        gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
        organizations_url: 'https://api.github.com/users/defunkt/orgs',
        repos_url: 'https://api.github.com/users/defunkt/repos',
        events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
        received_events_url: 'https://api.github.com/users/defunkt/received_events',
        type: 'User',
        site_admin: false
      }
    ];
    const users = spyOn(servicio, 'getAll').and.callFake( (user) => {
      return of(mockUser);
    })

    appComp.ngOnInit()

    expect(users).toHaveBeenCalled();
  })

  it('funcion suma' , () => {
    const suma = appComp.suma(4,5)
    expect(suma).toBe(9)
  })

  it('funcion suma' , () => {
    const suma = appComp.suma(-1,5)
    expect(suma).toBe(0)
  })

  it('Obtener listado de paises disponibles si no hay ninguna exclusion', () => {
    const paises = appComp.obtenerPaises();
    expect(paises).toContain('España')
    expect(paises).toContain('Italia')
    expect(paises).toContain('Francia')
  })

  it('Obtener listado de paises disponibles si excluimos a españa', () => {
    const paises = appComp.obtenerPaises('España');
    expect(paises).toContain('Italia')
    expect(paises).toContain('Francia')
  })

  it('Obtener listado de paises disponibles si excluimos a Italia', () => {
    const paises = appComp.obtenerPaises('Italia');
    expect(paises).toContain('España')
    expect(paises).toContain('Francia')
  })

  it('Obtener listado de paises disponibles si excluimos a Francia', () => {
    const paises = appComp.obtenerPaises('Francia');
    expect(paises).toContain('España')
    expect(paises).toContain('Italia')
  })

  it('Debe llamar al metodo getMessage y obtener respuesta hola', () => {
    // const users = spyOn(appComp, 'getMessage')
    const saludo = appComp.getMessage();
    expect(saludo).toContain('Hola');
  })

  it('Debe llamar al metodo getAdios y obtener respuesta adios', async(() => {
    const despedida = appComp.getAdios();
    expect(despedida).toContain('Adios');
  }))

  it('obtenerListado Debe llamar a getName()', () => {
    spyOn(appComp, 'getName');
    appComp.obtenerListado()
    expect(appComp.getName).toHaveBeenCalled()
  })

  it('getName debe llamar a getApeliido', () => {
    spyOn(appComp, 'getApellido')
    appComp.getName();
    expect(appComp.getApellido).toHaveBeenCalled()
  })

  it('getApellido() debe retornar Linares Parra', () => {
    const data = appComp.getApellido('Linares');
    expect(data).toContain('Linares')
  })

/*   it('getApellido() debe retornar Sanchez si no recibe Linares', () => {
    const data = appComp.getApellido('Orejas');
    expect(data).toContain('Sanchez')
  }) */

  it('El método multiplicar se inicializa el onInit', () => {
    const data = spyOn(appComp, 'multiplicar');
    appComp.ngOnInit()
    expect(data).toHaveBeenCalled();
    expect(data).toBeTruthy()
  })

  it('La multiplicación que extiende de commonComponent debe ser 20', () => {
    const data = appComp.multiplicar(10);
    expect(data).toBe(20)
  })

  it('La multiplicación debe retornar 0 al inyectarle un negativo', () => {
    const data = appComp.multiplicar(-1);
    expect(data).toBe(0)
  })

  it('La multiplicación debe retornar 0 al inyectarle un negativo', () => {
    const spy = spyOn(appComp, 'multiplicar').and.returnValue(20)
    appComp.getApellido(1);
    expect(spy).toHaveBeenCalled()
  })


  it('Comprobar que si enviamos un array vacio retorna un mensaje de error', () => {
    const array = []
    const f = appComp.comprobarArray(array)
    expect(f).toEqual('error')
    //expect(array.length).toBeGreaterThan(1)
  })

  it('Comprobar que si enviamos un array a la funcion comprobarArray retorna el número de elementos', () => {
    const array = [1,2,3]
    const f = appComp.comprobarArray(array)
    expect(f).toEqual(3)
  })

  it('El método comprobarSwitch se inicializa en el OnInit', () => {
    const spy = spyOn(appComp, 'comprobarPrecio')
    appComp.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })

  it('El método comprobarPrecio debe retornar 0.69 insertando 0', () => {
    const num = 0
    const d = appComp.comprobarPrecio(num)
    expect(d).toContain('0.69€')
  })

  it('El método comprobarPrecio debe retornar 0.52 insertando 1', () => {
    const num = 1
    const d = appComp.comprobarPrecio(num)
    expect(d).toContain('0.52€')
  })

  it('El método comprobarPrecio debe retornar 0.28 insertando 2', () => {
    const num = 2
    const d = appComp.comprobarPrecio(num)
    expect(d).toContain('0.28€')
  })


/*
  it('El método comprobarPrecio debe retornar Seleccione de uno a tres kilos', () => {
    const num = 5
    const d = appComp.comprobarPrecio(num)
    expect(d).toContain('Seleccione de uno a tres kilos')
  })
*/






});
