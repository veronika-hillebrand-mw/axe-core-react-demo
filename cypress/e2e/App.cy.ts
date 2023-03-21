describe('App specification', () => {
  it('loads', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Vite + React')
  })
})