import React from 'react'
import { mount } from '@cypress/react'
import Grid from './Grid'

const data = [
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:04.916002',
    description: 'consequat. laborum. adipiscing fugiat labore',
    link: 'https://formpl.us/templates',
    name: 'consectetur Lorem veniam,',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:04.916002',
    description: 'consequat. laborum. adipiscing fugiat labore',
    link: 'https://formpl.us/templates',
    name: 'consectetur Lorem veniam,',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:04.916002',
    description: 'consequat. laborum. adipiscing fugiat labore',
    link: 'https://formpl.us/templates',
    name: 'consectetur Lorem veniam,',
  },
]

it('renders Grid', () => {
  mount(<Grid data={data} />)
  cy.get('div').should('not.be.null')
})
