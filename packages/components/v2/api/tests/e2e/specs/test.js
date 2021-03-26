// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Get all Marvel characters', () => {
    cy.request('http://localhost:8000/api/v2021/aa/LString60')
    .then((response) => {
        expect(response.body).to.have.property('code', 200)
    })
  })
})
