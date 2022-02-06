// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@cypress/code-coverage/support'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  // If this failed with the promise error, rerun the test (clicking the rerun button on the browser) usually fixes it
  // If that fails, just use the method where you simply return the data as a js array
  /*cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates', // that have a URL that matches '//*'
    },
    { fixture: 'data' }
  ).as('data') // and assign an alias*/

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates', // that have a URL that matches '//*'
    },
    [
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.100120",
        "description": "nostrud occaecat incididunt voluptate mollit",
        "link": "https://formpl.us/templates",
        "name": "aliquip proident, Lorem"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:04.876755",
        "description": "nostrud veniam, exercitation amet, proident,",
        "link": "https://formpl.us/templates",
        "name": "laboris veniam, cupidatat"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.113387",
        "description": "Excepteur minim commodo incididunt aliquip",
        "link": "https://formpl.us/templates",
        "name": "ullamco elit, labore"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:04.916002",
        "description": "consequat. laborum. adipiscing fugiat labore",
        "link": "https://formpl.us/templates",
        "name": "consectetur Lorem veniam,"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.023189",
        "description": "aliquip magna proident, velit mollit",
        "link": "https://formpl.us/templates",
        "name": "elit, Excepteur fugiat"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:04.910167",
        "description": "adipiscing magna consectetur laboris cillum",
        "link": "https://formpl.us/templates",
        "name": "occaecat nostrud commodo"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:04.899700",
        "description": "cupidatat commodo adipiscing aliquip Lorem",
        "link": "https://formpl.us/templates",
        "name": "amet, cupidatat pariatur."
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.168653",
        "description": "Excepteur laborum. velit minim commodo",
        "link": "https://formpl.us/templates",
        "name": "adipiscing magna eiusmod"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.115546",
        "description": "voluptate dolore pariatur. aliqua. consequat.",
        "link": "https://formpl.us/templates",
        "name": "exercitation dolor proident,"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.140709",
        "description": "aliqua. reprehenderit dolore cupidatat mollit",
        "link": "https://formpl.us/templates",
        "name": "incididunt dolore cupidatat"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:04.891628",
        "description": "irure incididunt officia eiusmod mollit",
        "link": "https://formpl.us/templates",
        "name": "adipiscing magna amet,"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.006507",
        "description": "culpa proident, elit, reprehenderit officia",
        "link": "https://formpl.us/templates",
        "name": "consectetur elit, eiusmod"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.031238",
        "description": "ipsum aliquip labore adipiscing pariatur.",
        "link": "https://formpl.us/templates",
        "name": "mollit veniam, consectetur"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.066459",
        "description": "irure commodo dolor deserunt voluptate",
        "link": "https://formpl.us/templates",
        "name": "consectetur eiusmod culpa"
      },
      {
        "category": [
          "Health",
          "E-commerce",
          "Education"
        ],
        "created": "2022-02-01T21:31:05.048812",
        "description": "exercitation magna pariatur. occaecat Excepteur",
        "link": "https://formpl.us/templates",
        "name": "amet, occaecat commodo"
      }]
  ).as('data') // and assign an alias
})
