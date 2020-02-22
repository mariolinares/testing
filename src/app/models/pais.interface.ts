interface Currencies {
    code: string,
    name: string,
    symbol: string
}

interface Lenguages {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

interface Translations {
    de: string,
    es: string,
    fr: string,
    ja: string,
    it: string,
    br: string,
    pt: string
}

interface RegionalBlocs {
    acronym: string,
    name: string,
    otherAcronyms: any,
    otherNames: string[]
}

export interface Pais {
    name: string
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: any,
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: Currencies[],
    languages: Lenguages[],
    translations: Translations,
    flag: string,
    regionalBlocs: RegionalBlocs[],
    cioc: string
}
