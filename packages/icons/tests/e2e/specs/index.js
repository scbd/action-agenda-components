// https://docs.cypress.io/api/introduction/api.html
const iconNames = [ 'close', 'edit', 'question-circle', 'earth', 'trash-o', 'cloud-upload', 'chevron-down' ]

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')

    for (const name of iconNames) {
      cy.get(`#name-${name}`)
      .should(($el) => {
        expect($el).to.have.text(name)
      })
    }

  })
})
