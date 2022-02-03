import React from 'react'
import { mount } from '@cypress/react'
import ToolBar from './ToolBar'

const data = {
  category: ['Health', 'E-commerce', 'Education'],
  created: '2022-02-01T21:31:04.916002',
  description: 'consequat. laborum. adipiscing fugiat labore',
  link: 'https://formpl.us/templates',
  name: 'consectetur Lorem veniam,',
}

it('renders card', () => {
  mount(<ToolBar />)
  cy.get('div').should('not.be.null')
})
