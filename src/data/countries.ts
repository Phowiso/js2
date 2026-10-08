// Файл с многомерной структурой данных: страны и их города
// Страна содержит массив городов

export interface City {
  id: string;
  name: string;
  area: number;        // площадь в км²
  population: number;  // население
  founded: number;     // год основания
}

export interface Country {
  id: string;
  name: string;
  language: string;    // язык страны
  area: number;        // площадь в км²
  population: number;  // население
  cities: City[];      // массив городов этой страны
}

export const countries: Country[] = [
  {
    id: "russia",
    name: "Россия",
    language: "Русский",
    area: 17125191,
    population: 146150789,
    cities: [
      {
        id: "moscow",
        name: "Москва",
        area: 2561,
        population: 13010112,
        founded: 1147
      },
      {
        id: "spb",
        name: "Санкт-Петербург",
        area: 1439,
        population: 5600044,
        founded: 1703
      },
      {
        id: "novosibirsk",
        name: "Новосибирск",
        area: 502,
        population: 1633595,
        founded: 1893
      }
    ]
  },
  {
    id: "germany",
    name: "Германия",
    language: "Немецкий",
    area: 357022,
    population: 83200000,
    cities: [
      {
        id: "berlin",
        name: "Берлин",
        area: 891,
        population: 3769495,
        founded: 1237
      },
      {
        id: "munich",
        name: "Мюнхен",
        area: 310,
        population: 1488202,
        founded: 1158
      },
      {
        id: "hamburg",
        name: "Гамбург",
        area: 755,
        population: 1841179,
        founded: 808
      }
    ]
  },
  {
    id: "japan",
    name: "Япония",
    language: "Японский",
    area: 377975,
    population: 125100000,
    cities: [
      {
        id: "tokyo",
        name: "Токио",
        area: 2194,
        population: 13960000,
        founded: 1457
      },
      {
        id: "osaka",
        name: "Осака",
        area: 225,
        population: 2753862,
        founded: 1889
      },
      {
        id: "kyoto",
        name: "Киото",
        area: 827,
        population: 1463723,
        founded: 794
      }
    ]
  },
  {
    id: "france",
    name: "Франция",
    language: "Французский",
    area: 643801,
    population: 68000000,
    cities: [
      {
        id: "paris",
        name: "Париж",
        area: 105,
        population: 2161000,
        founded: 52
      },
      {
        id: "lyon",
        name: "Лион",
        area: 47,
        population: 522969,
        founded: 43
      },
      {
        id: "marseille",
        name: "Марсель",
        area: 240,
        population: 870321,
        founded: 600
      }
    ]
  },
  {
    id: "brazil",
    name: "Бразилия",
    language: "Португальский",
    area: 8515767,
    population: 215300000,
    cities: [
      {
        id: "brasilia",
        name: "Бразилиа",
        area: 5802,
        population: 3094325,
        founded: 1960
      },
      {
        id: "rio",
        name: "Рио-де-Жанейро",
        area: 1200,
        population: 6747815,
        founded: 1565
      },
      {
        id: "sao-paulo",
        name: "Сан-Паулу",
        area: 1521,
        population: 12325232,
        founded: 1554
      }
    ]
  }
];

// Получить все страны
export function getAllCountries(): Country[] {
  return countries;
}

// Найти страну по id
export function getCountryById(id: string): Country | undefined {
  return countries.find(c => c.id === id);
}

// Найти город по id (ищем по всем странам)
export function getCityById(cityId: string): { city: City; country: Country } | undefined {
  for (const country of countries) {
    const city = country.cities.find(c => c.id === cityId);
    if (city) {
      return { city, country };
    }
  }
  return undefined;
}
