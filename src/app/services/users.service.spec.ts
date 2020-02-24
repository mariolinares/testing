import { Pais } from './../models/pais.interface';
import { User } from './../models/user.interface';
import { TestBed, getTestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('UsersService', () => {

  // Se usa para inyectar el servicio
  let injector: TestBed

  // HttpTestingController se use para similar solicitudes
  let httpMock: HttpTestingController

  let service: UsersService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })

    // Tener acceso a las variables limpias antes de it();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController)

     // Instanciamos el servicio
    service = TestBed.get(UsersService)

  })

  afterEach(() => {
    // Verificamos que no haya solicitudes pendientes
    httpMock.verify();
  })

  it('Debe ser creado el servicio', () => {

    expect(service).toBeTruthy();
  });

  it('Debe retornar un Observable<User>', () => {

    // Objeto simulad de la respuesta
    // const service:UsersService = new UserService()
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

    // Nos subscibimos al método getAll()
    service.getAll().subscribe((users) => {
      expect(users.length).toBeGreaterThan(0);
      expect(users).toEqual(mockUser);
      expect(users[0].login).toBeDefined()
    })

    // Comprobamos la URL que sea igual
    const req = httpMock.expectOne('https://api.github.com/users');

    // Comprobamos el método de la peticiñon
    expect(req.request.method).toBe('GET');

    // FLUSH proporciona valores ficticios a nuestras solicitudes
    req.flush(mockUser);

  })

  it('Debe retornar un Array con España', () => {

    // Objeto simuladod de la respuesta
    // const service:UsersService = new UserService()
    const mockPais = [{
      name: 'Colombia',
      topLevelDomain: ['.co'],
      alpha2Code: 'CO',
      alpha3Code: 'COL',
      callingCodes: ['57'],
      capital: 'Bogotá',
      altSpellings: ['CO', 'Republic of Colombia', 'República de Colombia'],
      region: 'Americas',
      subregion: 'South America',
      population: 48759958,
      latlng: [4.0, -72.0],
      demonym: 'Colombian',
      area: 1141748.0,
      gini: 55.9,
      timezones: ['UTC-05:00'],
      borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
      nativeName: 'Colombia',
      numericCode: '170',
      currencies: [{
          code: 'COP',
          name: 'Colombian peso',
          symbol: '$'
      }],
      languages: [{
          iso639_1: 'es',
          iso639_2: 'spa',
          name: 'Spanish',
          nativeName: 'Español'
      }],
      translations: {
          de: 'Kolumbien',
          es: 'Colombia',
          fr: 'Colombie',
          ja: 'コロンビア',
          it: 'Colombia',
          br: 'Colômbia',
          pt: 'Colômbia'
      },
      flag: 'https://restcountries.eu/data/col.svg',
      regionalBlocs: [{
          acronym: 'PA',
          name: 'Pacific Alliance',
          otherAcronyms: [],
          otherNames: ['Alianza del Pacífico']
      }, {
          acronym: 'USAN',
          name: 'Union of South American Nations',
          otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
          otherNames: ['Unión de Naciones Suramericanas', 'União de Nações Sul-Americanas', 'Unie van Zuid-Amerikaanse Naties', 'South American Union']
      }],
      cioc: 'COL'
    }]

    // Nos subscibimos al método getAll()
    service.getAllwithParams('España').subscribe((pais) => {
      expect(pais.length).toBe(1);
      expect(pais).toEqual(mockPais);
      expect(pais[0].flag).toBeDefined()
    })

    // Comprobamos la URL que sea igual
    const req = httpMock.expectOne('https://restcountries.eu/rest/v2/name/spain');

    // Comprobamos el método de la peticiñon
    expect(req.request.method).toBe('GET');

    // FLUSH proporciona valores ficticios a nuestras solicitudes
    req.flush(mockPais);

  })

   it('Debe retornar un Array con United', () => {

    // Instanciamos el servicio
    const service:UsersService = TestBed.get(UsersService)

    // Objeto simuladod de la respuesta
    // const service:UsersService = new UserService()
    const mockPaisUnited = [{
      name: 'Colombia',
      topLevelDomain: ['.co'],
      alpha2Code: 'CO',
      alpha3Code: 'COL',
      callingCodes: ['57'],
      capital: 'Bogotá',
      altSpellings: ['CO', 'Republic of Colombia', 'República de Colombia'],
      region: 'Americas',
      subregion: 'South America',
      population: 48759958,
      latlng: [4.0, -72.0],
      demonym: 'Colombian',
      area: 1141748.0,
      gini: 55.9,
      timezones: ['UTC-05:00'],
      borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
      nativeName: 'Colombia',
      numericCode: '170',
      currencies: [{
          code: 'COP',
          name: 'Colombian peso',
          symbol: '$'
      }],
      languages: [{
          iso639_1: 'es',
          iso639_2: 'spa',
          name: 'Spanish',
          nativeName: 'Español'
      }],
      translations: {
          de: 'Kolumbien',
          es: 'Colombia',
          fr: 'Colombie',
          ja: 'コロンビア',
          it: 'Colombia',
          br: 'Colômbia',
          pt: 'Colômbia'
      },
      flag: 'https://restcountries.eu/data/col.svg',
      regionalBlocs: [{
          acronym: 'PA',
          name: 'Pacific Alliance',
          otherAcronyms: [],
          otherNames: ['Alianza del Pacífico']
      }, {
          acronym: 'USAN',
          name: 'Union of South American Nations',
          otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
          otherNames: ['Unión de Naciones Suramericanas', 'União de Nações Sul-Americanas', 'Unie van Zuid-Amerikaanse Naties', 'South American Union']
      }],
      cioc: 'COL'
    }]

    // Nos subscibimos al método getAll()
    service.getAllwithParams().subscribe((paisUnited) => {
      expect(paisUnited.length).toBe(1);
      expect(paisUnited).toEqual(mockPaisUnited);
      expect(paisUnited[0].name).toBeDefined()
    })

    // Comprobamos la URL que sea igual
    const req = httpMock.expectOne('https://restcountries.eu/rest/v2/name/united');

    // Comprobamos el método de la peticiñon
    expect(req.request.method).toBe('GET');

    // FLUSH proporciona valores ficticios a nuestras solicitudes
    req.flush(mockPaisUnited);

  })
});
