import React from 'react'
import { mount } from '@cypress/react'
import Spinner from './Spinner'

it('renders Spinner', () => {
  mount(<Spinner />)
  cy.get('div').should('not.be.null')
})
