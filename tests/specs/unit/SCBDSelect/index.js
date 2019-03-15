
describe('SCBD Select Component Unit', () => {

  before(() => {
    cy.visit('http://localhost:8080/#/component/scbdselect')
  })

  it('Validates url field', () => {})

  scbdSelectTest('OrganizationType',9, 'acedemic')
  scbdSelectTest('Jurisdiction',3, 'national')
  scbdSelectTest('Subject',81, '2010')
  scbdSelectTest('Aichi',20, 'aware')
  scbdSelectTest('Countries',198, 'afgh')
  scbdSelectTest('Regions',110, 'afgh')
  scbdSelectTest('GeoLocation',308, 'africa')
  scbdSelectTest('SDGs',17, 'end')
})


function scbdSelectTest(type, count, search){

  describe(`SCBD Select ${type}`, () => {  


    beforeEach(() => {
      cy.get(`#${type}`)
        .as('type')
    })

    it(`has ${count} number of options`, () => {  
      cy.get('@type')
        .find('.multiselect__element')
        .should('have.length', count)
    })

    it('can select multiple entries', () => {  
      cy.get('@type')
        .find('.multiselect__select')
        .click()

      cy.get('@type')
        .find('.multiselect__element')
        .first()
        .click()

      cy.get('@type')
        .find('.multiselect__select')
        .click()

      cy.get('@type')
      .find('.multiselect__element')
      .last()
      .click()

      cy.get('@type')
        .find('.multiselect__tag')
        .should('have.length', 2)

    })

    it('can deselect multiple entries', () => {  
      cy.get('@type')
        .find('.multiselect__tag')
        .first()
        .find('.multiselect__tag-icon')
        .click()

      cy.get('@type')
      .find('.multiselect__tag')
      .should('have.length', 1)

      cy.get('@type')
        .find('.multiselect__tag')
        .first()
        .find('.multiselect__tag-icon')
        .click()

      cy.get('@type')
      .find('.multiselect__tag')
      .should('have.length', 0)
    })

    it('shows required if needed', () => {  
      cy.get('@type')
        .should('have.class', 'is-invalid')

      cy.get(`#${type}Group`)
        .find('.invalid-feedback')
        .first('ul li')
        .should('contain','field is required.')  

      it('search as you type', () => {  
        cy.get('@type')
        .find('.multiselect__select')
        .click({ force: true })
  
  
        cy.get('@type')
          .first('input')
          .type(search, { force: true })
          .find('.multiselect__element')
          .first()
          .click()
  
        cy.get('@type')
          .find('.multiselect__tag')
          .should('have.length', 1)
      })
    })

  })
}