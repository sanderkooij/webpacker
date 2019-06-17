describe('Square calculation form', () => {
  it('should correctly calculate the square of the given input', () => {
    cy.visit('/')
    cy.get('input[name="demo_number_input"]').type('5')
    cy.get('button[type="submit"]').click()
    cy.get('#result').contains('The square of 5 is 25')
  })
})
