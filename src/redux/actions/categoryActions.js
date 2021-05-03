import { types } from '../types/types';
// import { useRequest } from '../../hooks/useRequest';

// eslint-disable-next-line react-hooks/rules-of-hooks
// const { get } = useRequest();

const data = [
  {
    "id": "1",
    "title": {
      "de": "Klempner",
      "en": "Plumber"
    },
    "count": 456,
    "subcategory": [
      {
        "id": "11",
          "title": {
          "de": "Online-Sanitärberatung",
          "en": "Online plumbing consultation"
        }
      },
      {
        "id": "12",
        "title": {
          "de": "Klempnerarbeiten",
          "en": "Plumbing work"
        }
      },
      {
        "id": "13",
        "title": {
          "de": "Beseitigung des Lecks",
          "en": "Eliminating the leak"
        }
      },
      {
        "id": "14",
        "title": {
          "de": "Installation und Reparatur von Toilettenschüsseln",
          "en": "Installation and repair of toilet bowls"
        }
      },
      {
        "id": "15",
        "title": {
          "de": "Kanalreinigung",
          "en": "Sewerage cleaning"
        }
      },
      {
        "id": "16",
        "title": {
          "de": "Installation und Reparatur des Mischers",
          "en": "Mixer installation and repair"
        }
      },
      {
        "id": "17",
        "title": {
          "de": "Installation und Reparatur von Kranen",
          "en": "Crane installation and repair"
        }
      },
      {
        "id": "18",
        "title": {
          "de": "Installation und Reparatur der Wasserversorgung",
          "en": "Installation and repair of water supply"
        }
      },
      {
        "id": "19",
        "title": {
          "de": "Installation und Reparatur einer Duschkabine",
          "en": "Installation and repair of a shower cabin"
        }
      },
      {
        "id": "20",
        "title": {
          "de": "Installation und Austausch von Heizkörpern",
          "en": "Installation and replacement of radiators"
        }
      },
      {
        "id": "21",
        "title": {
          "de": "Badewannenrestaurierung",
          "en": "Bathtub restoration"
        }
      },
      {
        "id": "22",
        "title": {
          "de": "Installation und Austausch von Wasserfiltern",
          "en": "Installation and replacement of water filters"
        }
      },
      {
        "id": "23",
        "title": {
          "de": "Einbau und Austausch des Siphons",
          "en": "Installing and replacing the siphon"
        }
      },
      {
        "id": "24",
        "title": {
          "de": "Installation und Reparatur von Spülen",
          "en": "Sink installation and repair"
        }
      },
      {
        "id": "25",
        "title": {
          "de": "Kanalisation",
          "en": "Sewerage installation"
        }
      },
      {
        "id": "26",
        "title": {
          "de": "Installation und Austausch eines beheizten Handtuchhalters",
          "en": "Installing and replacing a heated towel rail"
        }
      },
      {
        "id": "27",
        "title": {
          "de": "Installation und Installation einer Spüle",
          "en": "Installation and installation of a sink"
        }
      },
      {
        "id": "28",
        "title": {
          "de": "Installation und Austausch von Wasserzählern",
          "en": "Installation and replacement of water meters"
        }
      },
      {
        "id": "29",
        "title": {
          "de": "Badinstallation",
          "en": "Bath installation"
        }
      },
      {
        "id": "30",
        "title": {
          "de": "Sonstige Sanitärdienstleistungen",
          "en": "Other plumbing services"
        }
      }
    ]
  },
  {
    "id": "2",
    "title": {
      "de": "Ein Elektriker",
      "en": "An electrician"
    },
    "count": 234,
    "subcategory": [
      {
        "id": "21",
        "title": {
          "de": "Installation und Reparatur der elektrischen Verkabelung",
          "en": "Installation and repair of electrical wiring"
        }
      },
      {
        "id": "22",
        "title": {
          "de": "Installation und Reparatur von Lampen",
          "en": "Installation and repair of lamps"
        }
      },
      {
        "id": "23",
        "title": {
          "de": "Kronleuchter Anschluss und Reparatur",
          "en": "Chandelier connection and repair"
        }
      },
      {
        "id": "24",
        "title": {
          "de": "Installation und Austausch von Steckdosen",
          "en": "Installation and replacement of sockets"
        }
      },
      {
        "id": "25",
        "title": {
          "de": "Elektroinstallationsarbeiten",
          "en": "Electric installation work"
        }
      },
      {
        "id": "26",
        "title": {
          "de": "Installation und Austausch des Leistungsschalters",
          "en": "Installation and replacement of the circuit breaker"
        }
      },
      {
        "id": "27",
        "title": {
          "de": "Intercom-Installation",
          "en": "Intercom installation"
        }
      },
      {
        "id": "28",
        "title": {
          "de": "Installation von FI-Schutzschaltern und Maschinen",
          "en": "Installation of RCDs and machines"
        }
      },
      {
        "id": "29",
        "title": {
          "de": "Spannungsregler anschließen",
          "en": "Connecting a voltage regulator"
        }
      },
      {
        "id": "30",
        "title": {
          "de": "Wandschlitz",
          "en": "Wall chipping"
        }
      },
      {
        "id": "31",
        "title": {
          "de": "Installation und Austausch eines Stromzählers",
          "en": "Installation and replacement of an electric meter"
        }
      },
      {
        "id": "32",
        "title": {
          "de": "Klingeleinstellung",
          "en": "Ring setting"
        }
      },
      {
        "id": "33",
        "title": {
          "de": "Installation und Austausch des Transformators",
          "en": "Installation and replacement of the transformer"
        }
      },
      {
        "id": "34",
        "title": {
          "de": "Installation und Montage der Schalttafel",
          "en": "Installation and assembly of the electrical panel"
        }
      },
      {
        "id": "35",
        "title": {
          "de": "Andere Elektriker-Dienstleistungen",
          "en": "Other electrician services"
        }
      }
    ]
  },
  {
    "id": "3",
    "title": {
      "de": "Zimmermann",
      "en": "Carpenter"
    },
    "count": 1245
  },
  {
    "id": "4",
    "title": {
      "de": "Locksmith",
      "en": "Schlosser",
    },
    "count": 23
  },
  {
    "id": "5",
    "title": {
       "de": "Fliesen legen",
       "en": "Laying tiles",
     },
    "count": 123
  },
  {
    "id": "6",
    "title": {
      "de": "Verputzarbeiten",
      "en": "Plastering works"
    },
    "count": 245
  },
  {
    "id": "7",
    "title": {
      "de": "Ein Zimmermann",
      "en": "A carpenter"
    },
    "count": 923
  },
  {
    "id": "8",
    "title": {
      "de": "Landschaftsbau",
      "en": "Landscaping"
    },
    "count": 1456
  },
  {
    "id": "9",
    "title": {
      "de": "Architektur und Design",
      "en": "Architecture and design"
    },
    "count": 46
  },
  {
    "id": "10",
    "title": {
      "en": "Budgeting",
      "de": "Budgetierung",
    },
    "count": 1236
  },
  {
    "id": "11",
    "title": {
      "de": "Ausgrabung",
      "en": "Excavation"
    },
    "count": 1235
  },
  {
    "id": "12",
    "title": {
      "de": 'Lüftungsanlage',
      "en": "Ventilation installation"
    },
    "count": 90
  }
]

export const loadCategoryData = () => async dispatch => {
  // let URL = 'https://api.absolute.bet/countries/';
  try {
    // const JSON = await get(URL);
    dispatch({
      type: types.SET_CATEGORY_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
