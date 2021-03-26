describe('Permissions', () => {
  it('Should return 403', () => {
    const url              = 'http://localhost:8000/api/v2021/aa/LString60'
    const failOnStatusCode = false

    cy.request({ url,failOnStatusCode })
    .then((response) => {
      expect(response).to.have.property('status', 403)
    })
    
  })
})