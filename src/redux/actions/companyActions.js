import { types } from '../types/types';
// import { useRequest } from '../../hooks/useRequest';

// eslint-disable-next-line react-hooks/rules-of-hooks
// const { get } = useRequest();

const data = [
  {
    "id": "0",
    "date": "2021-04-16",
    "name": "Od Marine Service",
    "country": "ua",
    "photo": "https://maritime-zone.com/uploads/default/company-default.svg",
    "isPrime": true,
    "rate": 5,
    "about": null,
    "skills": [
      {
        "id": "1",
        "services": ["11", "13", "15"],
        "gender": ["male", "female"],
        "country": ["ua", "ru"],
        "age": [30, 50],
      },
      {
        "id": "2",
        "services": ["21", "22"],
        "gender": ["male"],
        "country": ["ua"],
        "age": [30, 50],
      }
    ],
    "reviews": []
  },
  {
    "id": "1",
    "date": "2021-04-16",
    "name": "Fesko",
    "country": "us",
    "photo": "https://maritime-zone.com/uploads/companies/a4dfb39f1bb9557defcf2a0629f47976/152_152/IMG_20210421_174451_093.jpg",
    "isPrime": true,
    "rate": 5,
    "about": "Focus the team on the tasks at hand or the internal and external customer requirements.",
    "skills": [
      {
        "id": "1",
        "services": ["11"],
        "gender": ["female"],
        "country": ["ua", "ru"],
        "age": [30],
      },
      {
        "id": "2",
        "services": ["21", "22", "23"],
        "gender": ["male"],
        "country": ["ua"],
        "age": [30, 50],
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5
      },
      {
        "position": "Main Architecture and design",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 3
      }
    ]
  },
  {
    "id": "2",
    "date": "2021-04-16",
    "name": "Genco South Group",
    "country": "us",
    "photo": "https://maritime-zone.com/uploads/companies/75085a29b113fd97bef4d9b1bc22fe7c/152_152/IMAGE_2021_04_14_20:15:52.jpg",
    "rate": 5,
    "about": "Focus the team on the tasks at hand or the internal and external customer requirements.",
    "skills": [
      {
        "id": "1",
        "services": ["11"],
        "gender": ["female"],
        "country": ["ua", "ru"],
        "age": [30],
      },
      {
        "id": "2",
        "services": ["21", "22", "23"],
        "gender": ["male"],
        "country": ["ua"],
        "age": [30, 50],
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5
      }
    ]
  },
  {
    "id": "3",
    "date": "2021-04-16",
    "name": "Od Marine Service",
    "country": "ua",
    "photo": "https://maritime-zone.com/uploads/default/company-default.svg",
    "isPrime": false,
    "rate": 5,
    "about": null,
    "skills": [
      {
        "id": "1",
        "services": ["11", "13", "15"],
        "gender": ["male", "female"],
        "age": [30, 50],
      },
      {
        "id": "2",
        "services": ["21", "22"],
        "gender": ["male"],
        "age": [30, 50],
      }
    ],
    "reviews": [
      {
        "position": "Main Architecture and design",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 5
      },
      {
        "position": "Main Architecture and design",
        "period": ["23.04.2021", "31.05.2021"],
        "description": "Focus the team on the tasks at hand or the internal and external customer requirements.",
        "rate": 3
      }
    ]
  },
]

export const loadCompanyData = () => async dispatch => {
  // let URL = 'https://api.absolute.bet/feed/?key=sports-tree';
  try {
    // const JSON = await get(URL);
    dispatch({
      type: types.SET_COMPANY_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
