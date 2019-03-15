// https://docs.cypress.io/api/introduction/api.html

describe('Action Agenda Form E2E', () => {
  beforeEach(() => {
    cy.viewport('iphone-6') 
    cy.visit('http://localhost:8080/#/aaform')
  })

  it('The form loads', () => {  
    cy.get('h2')
      .should('have.length', 4)

    cy.get('form')
      .find('input')
      .should('have.length', 21)
  })

  it('Required fields validate', () => {
    cy.get('form').submit() 
    cy.get('.is-invalid').should('have.length', 11)
  })

  it('Validates url field', () => {
    
    cy.get('input[type=url]').type('Hello, World')
    cy.get('form').submit() 
    cy.get('input[type=url]').should('have.class', 'is-invalid')
    cy.get('input[type=url]').clear()  

    cy.get('form').find('#form-organization-website').type('www.cbd.int')
    cy.get('form').submit() 
    cy.get('#form-organization-website').should('not.have.class', 'is-invalid')
    cy.get('#form-organization-website').clear() 

    cy.get('form').find('#form-organization-website').type('http://www.cbd.int')
    cy.get('form').submit() 
    cy.get('#form-organization-website').should('not.have.class', 'is-invalid')
    cy.get('#form-organization-website').clear()   

    cy.get('form').find('#form-organization-website').type('https://www.cbd.int')
    cy.get('form').submit() 
    cy.get('#form-organization-website').should('not.have.class', 'is-invalid')
     
  })


  it('Validates email field', () => {
    
    cy.get('input[type=email]').each(($el) => {
        cy.wrap($el).click().type('Hello, World')
    })
    cy.get('form').submit() 

    cy.get('input[type=email]').each(($el) => {
      cy.wrap($el).should('have.class', 'is-invalid')
      cy.wrap($el).clear()  
    })   

    cy.get('input[type=email]').each(($el) => {
      cy.wrap($el).click().type('it@cbd.int')
    })
    cy.get('form').submit() 

    cy.get('input[type=email]').each(($el) => {
      cy.wrap($el).should('not.have.class', 'is-invalid')
    })   
     
  })

})
