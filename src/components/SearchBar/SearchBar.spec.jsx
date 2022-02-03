import React from 'react'
import { mount } from '@cypress/react'
import SearchBar from './SearchBar'

it('renders search bar', () => {
  mount(<SearchBar />)
  cy.get('div').should('not.be.null')
})
