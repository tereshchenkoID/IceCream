import { types } from '../types/types';
// import { useRequest } from '../../hooks/useRequest';

// eslint-disable-next-line react-hooks/rules-of-hooks
// const { get } = useRequest();

const data = [
  {
    "id": "0",
    "date": "2021-04-16",
    "name": "Vladimir",
    "surname": "Grigoriev",
    "gender": "male",
    "age": 30,
    "country": "ua",
    "photo": "https://images.kabanchik.ua/cb57d651-4552-4738-8a19-aa781982744b.jpg",
    "isPrime": true,
    "rate": 5,
    "wage": 25.3,
    "about": "Focus the team on the tasks at hand or the internal and external customer requirements.",
    "skills": [
      {
        "id": "1",
        "services": ["11", "13", "15"]
      },
      {
        "id": "2",
        "services": ["21", "22"]
      }
    ],
    "works": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements."
      },
      {
        "position": "Main Architecture and design",
        "company": "Company Name 2",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements."
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5,
      },
      {
        "position": "Main Architecture and design",
        "company": "Company Name 2",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 3,
      }
    ]
  },
  {
    "id": "1",
    "date": "2021-04-16",
    "name": "Vasya",
    "surname": "Pupkin",
    "gender": "male",
    "age": 22,
    "country": "ru",
    "photo": "https://images.kabanchik.ua/b215b5f2-2d03-4936-a36e-14ca2aad3773.jpg",
    "isPrime": false,
    "rate": 3.2,
    "wage": 50.2,
    "about":  null,
    "skills": [
      {
        "id": "2",
        "services": ["21", "22", "23", "24", "25", "26", "27"]
      }
    ],
    "works": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements."
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5,
      }
    ]
  },
  {
    "id": "2",
    "date": "2021-04-16",
    "name": "Inokentiy",
    "surname": "Smoktunovsky",
    "gender": "male",
    "age": 45,
    "country": "ua",
    "photo": "https://images.kabanchik.ua/15b21a3f-2b8b-4490-9eb7-746ca379bbf8.jpg",
    "isPrime": false,
    "wage": 35,
    "about": "Focus the team on the tasks at hand or the internal and external customer requirements.",
    "skills": [
      {
        "id": "3",
        "services": []
      }
    ],
    "works": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": null
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5
      }
    ]
  },
  {
    "id": "3",
    "date": "2021-04-16",
    "name": "Dmytro",
    "surname": "Zemleroyka",
    "gender": "male",
    "age": 18,
    "country": "ua",
    "photo": "https://images.kabanchik.ua/1e2ca80b-ee67-4499-a65b-03483dcf2123.jpg",
    "isPrime": false,
    "rate": 3.235,
    "wage": 32,
    "about": "Focus the team on the tasks at hand or the internal and external customer requirements.",
    "skills": [
      {
        "id": "4",
        "services": []
      }
    ],
    "works": [],
    "reviews": []
  },
  {
    "id": "4",
    "date": "2021-04-16",
    "name": "Vasiliy",
    "surname": "Dolbolod",
    "gender": "male",
    "age": 54,
    "country": "ua",
    "photo": "https://images.kabanchik.ua/fcb5c47a-6f94-4c8d-9075-0fb12b1e48f5.jpg",
    "isPrime": true,
    "rate": 4.000,
    "wage": 12,
    "about": "Focus the team on the tasks at hand or the internal and external customer requirements.",
    "skills": [
      {
        "id": "5",
        "services": []
      }
    ],
    "works": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": null
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5
      }
    ]
  },
  {
    "id": "5",
    "date": "2021-04-16",
    "name": "Koka",
    "surname": "Klava",
    "gender": "female",
    "age": 23,
    "country": "ua",
    "photo": "https://images.kabanchik.ua/f85f0941-6fab-47ca-b4c3-4e9ecc92bdee.jpg",
    "isPrime": true,
    "rate": 5,
    "wage": 15,
    "about": null,
    "skills": [
      {
        "id": "6",
        "services": []
      }
    ],
    "works": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements."
      },
      {
        "position": "Main Architecture and design",
        "company": "Company Name 2",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements."
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "company": "Company Name",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5
      },
      {
        "position": "Main Architecture and design",
        "company": "Company Name 2",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 3
      }
    ]
  }
]

export const loadCardData = () => async dispatch => {
  // let URL = 'https://api.absolute.bet/feed/?key=sports-tree';
  try {
    // const JSON = await get(URL);
    dispatch({
      type: types.SET_CARD_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
