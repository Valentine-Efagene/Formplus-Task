import React from 'react'
import { mount } from '@cypress/react'
import Info from './Info'

it('renders Info', () => {
  mount(
    <Info
      text="Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates"
      icon={<i className="fas fa-info-circle"></i>}
    />
  )
  cy.get('div').should('not.be.null')
})
