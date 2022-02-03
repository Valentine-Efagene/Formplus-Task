import React from 'react'
import { mount } from '@cypress/react'
import Select from './Select'

it('renders search bar', () => {
  mount(<Select />)
  cy.get('div').should('not.be.null')
})
