// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests

beforeEach(() => {
  //cy.viewport('iphone-5')
  cy.visit('http://localhost:3000')
})

describe('', () => {
  it('', () => {
    cy.get('div').should('be.visible')
  })
})
