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

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  cy.intercept(
    'POST', // Route all GET requests
    'https://traffikpilot.live/api/user/signin', // that have a URL that matches '/users/*'
    {
      statusCode: 201,
      statusText: 'SUCCESS',
      body: {
        user: {
          email: 'janedoe@gmail.com',
          name: 'Name',
          username: 'Username',
          avatar: 'https://i.ibb.co/9ycTC57/image-2021-07-07-165600.png',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQzODJhMDAxOWY2ZTc4YjIzMzRkNyIsImVtYWlsIjoiamFuZWRvZUBnbWFpbC5jb20iLCJjb25maXJtZWQiOmZhbHNlLCJpYXQiOjE2Mzc2OTM0ODIsImV4cCI6MTYzNzc3OTg4Mn0.jtBG2C30Vb72wFj3hKbjYbYw5fbIAg6kW6LwzDoJgFo',
        },
      },
    }
  ).as('signIn') // and assign an alias

  cy.intercept(
    'POST', // Route all POST requests
    'https://traffikpilot.live/api/user/signup', // that have a URL that matches '/users/*'
    {
      statusCode: 201,
      statusText: 'CREATED',
      body: {
        email: 'janedoe@gmail.com',
        password: '#Letslove21',
      },
    }
  ).as('signUp') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/trends/fetch/trend*', // that have a URL that matches '//*'
    },
    { fixture: 'trend' }
  ).as('trends') // and assign an alias

  cy.intercept(
    'POST',
    'https://traffikpilot.live/api/user/activity/trends',
    {
      statusCode: 201,
      statusText: 'CREATED',
      body: {},
    }
  ).as('trendsave') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://www.googleapis.com/youtube/v3/search*', // that have a URL that matches '//*'
    },
    { fixture: 'youtube' }
  ).as('youtube') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=*', // that have a URL that matches '//*'
    },
    { fixture: 'youtubeJSON' }
  ).as('youtubeJSON') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://api.vimeo.com/videos?query*', // that have a URL that matches '//*'
    },
    { fixture: 'vimeo' }
  ).as('vimeo') // and assign an alias

  cy.intercept(
    'POST',
    'https://traffikpilot.live/api/user/activity/video',
    {
      statusCode: 201,
      statusText: 'CREATED',
      body: {},
    }
  ).as('videosave') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/user/activity/me', // that have a URL that matches '//*'
    },
    { fixture: 'profile' }
  ).as('profile') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/user/activity/leads', // that have a URL that matches '//*'
    },
    { fixture: 'leads' }
  ).as('leads') // and assign an alias

  cy.intercept(
    'POST',
    'https://traffikpilot.live/api/user/activity/leads',
    {
      statusCode: 201,
      statusText: 'CREATED',
      body: {
        name: 'name',
        email: 'name@gmail.com',
      },
    }
  ).as('savelead') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/user/activity/brands', // that have a URL that matches '//*'
    },
    { fixture: 'brands' }
  ).as('brands') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/user/activity/stats/hijack', // that have a URL that matches '//*'
    },
    { fixture: 'stats' }
  ).as('stats') // and assign an alias

  cy.intercept(
    'POST',
    'https://traffikpilot.live/api/user/activity/brands',
    {
      statusCode: 201,
      statusText: 'CREATED',
      body: {
        name: 'sample name',
        slogan: 'sample slogan',
        avatar: 'sample brand image',
      },
    }
  ).as('brandsave') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/user/activity/messages', // that have a URL that matches '//*'
    },
    { fixture: 'messages' }
  ).as('messages') // and assign an alias

  cy.intercept(
    'POST',
    'https://traffikpilot.live/api/user/activity/messages',
    {
      statusCode: 201,
      statusText: 'CREATED',
      body: {
        color: null,
        style: null,
        trafficSent: null,
        SocialPageUrl: null,
        autoResponder: null,
        autoResponder: null,
        baittext: null,
        successMessage: null,
        name: null,
        signupText: null,
        successMessage: null,
      },
    }
  ).as('messagesave') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/user/activity/hijack/content', // that have a URL that matches '//*'
    },
    { fixture: 'hijacked_contents' }
  ).as('hijacked_contents') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url:
        'https://traffikpilot.live/api/user/activity/hijack/content/*', // that have a URL that matches '//*'
    },
    { fixture: 'hijacked_content' }
  ).as('hijacked_content') // and assign an alias

  cy.intercept(
    {
      method: 'GET', // Route all GET requests
      url: 'https://traffikpilot.live/api/user/activity/hijack/video', // that have a URL that matches '//*'
    },
    { fixture: 'hijacked_videos' }
  ).as('hijacked_videos') // and assign an alias
})
