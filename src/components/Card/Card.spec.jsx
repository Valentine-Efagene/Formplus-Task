import React from 'react'
import { mount } from '@cypress/react'
import Card from './Card'

const data = {
  category: ['Health', 'E-commerce', 'Education'],
  created: '2022-02-01T21:31:04.916002',
  description: 'consequat. laborum. adipiscing fugiat labore',
  link: 'https://formpl.us/templates',
  name: 'consectetur Lorem veniam,',
}

it('renders card', () => {
  mount(<Card data={data} />)
  cy.get('div').should('not.be.null')
})
