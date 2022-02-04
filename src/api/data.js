import axios from "axios"

export async function fetchData() {
  const _data = [
    {
      category: ['Health'],
      created: '2022-01-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Health'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Health'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Health'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Health'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['E-commerce'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['E-commerce'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Health', 'E-commerce', 'Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      category: ['Health', 'E-commerce', 'Education'],
      created: '2022-02-01T21:31:05.113387',
      description: 'Excepteur minim commodo incididunt aliquip',
      link: 'https://formpl.us/templates',
      name: 'ullamco elit, labore',
    },
    {
      "category": [
        "Health",
        "E-commerce",
        "Education"
      ],
      "created": "2022-02-01T21:31:04.953509",
      "description": "magna consectetur Lorem cupidatat veniam,",
      "link": "https://formpl.us/templates",
      "name": "occaecat eiusmod minim"
    },
    {
      "category": [
        "Health",
        "E-commerce",
        "Education"
      ],
      "created": "2022-02-01T21:31:05.024820",
      "description": "cupidatat Excepteur eiusmod aliqua. pariatur.",
      "link": "https://formpl.us/templates",
      "name": "aliqua. cupidatat ipsum"
    },
    {
      "category": [
        "Health",
        "E-commerce",
        "Education"
      ],
      "created": "2022-02-01T21:31:04.883052",
      "description": "pariatur. laboris ipsum fugiat nostrud",
      "link": "https://formpl.us/templates",
      "name": "magna cillum aliqua."
    },
    {
      "category": [
        "Health",
        "E-commerce",
        "Education"
      ],
      "created": "2022-02-01T21:31:04.973532",
      "description": "consectetur irure minim tempor Lorem",
      "link": "https://formpl.us/templates",
      "name": "culpa proident, mollit"
    },
    {
      "category": [
        "Health",
        "E-commerce",
        "Education"
      ],
      "created": "2022-02-01T21:31:05.177063",
      "description": "amet, dolore mollit adipiscing ullamco",
      "link": "https://formpl.us/templates",
      "name": "adipiscing culpa reprehenderit"
    },
    {
      "category": [
        "Health",
        "E-commerce",
        "Education"
      ],
      "created": "2022-02-01T21:31:04.988099",
      "description": "minim culpa velit laborum. deserunt",
      "link": "https://formpl.us/templates",
      "name": "nulla deserunt commodo"
    },
    {
      "category": [
        "Health",
        "E-commerce"
      ],
      "created": "2022-02-01T21:31:04.597696",
      "description": "voluptate laborum. Lorem dolor proident,",
      "link": "https://formpl.us/templates",
      "name": "ullamco eiusmod"
    }
  ]
  //didnt work //const data = await axios.get("https://api.example.com/itemshttps://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
  //const data = await axios.get("https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
  //return data

  return { data: _data }
}
