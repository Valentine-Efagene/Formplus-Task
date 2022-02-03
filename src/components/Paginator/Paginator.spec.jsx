import React from 'react'
import { mount } from '@cypress/react'
import Paginator from './Paginator'

it('renders Paginator', () => {
  mount(<Paginator />)
  cy.get('div').should('not.be.null')
})
