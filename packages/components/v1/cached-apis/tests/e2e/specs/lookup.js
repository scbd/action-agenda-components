// https://docs.cypress.io/api/introduction/api.html

describe('cached apis service', () => {

  it('lookup works on all apis passing array with 1 key', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.get('#lu-all')
    .should(($el) => {
      expect($el).to.have.text('2')
    })
  })

  it('lookup works on document states passing array with 1 key', () => {
    cy.get('#lu-document-states')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })
  ///
  it('lookup works on jurisdictions passing array with 1 key', () => {
    cy.get('#lu-jurisdictions')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })

  it('lookup works on aichis passing a string  key', () => {
    cy.get('#lu-aichis')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })

  it('lookup works on subjects passing an array with three keys', () => {
    cy.get('#lu-subjects')
    .should(($el) => {
      expect($el).to.have.text('3')
    })
  })

  it('lookup workss passing code for country', () => {
    cy.get('#lu-countries')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })

  it('lookup workss for orgTypes', () => {
    cy.get('#lu-org-types')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })
  
  it('lookup workss for  regions', () => {
    cy.get('#lu-regions')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })
  
  it('lookup workss for  geoLocations', () => {
    cy.get('#lu-geo-locations')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })

  it('lookup workss for  sdgs', () => {
    cy.get('#lu-sdgs')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })

  it('lookup works for actionCategories and single param return a single object', () => {
    cy.get('#lu-action-categories')
    .should(($el) => {
      expect($el).to.have.text('true')
    })
  })

})
