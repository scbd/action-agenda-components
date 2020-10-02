// https://docs.cypress.io/api/introduction/api.html

describe('cached apis service', () => {
  it('loads all data into 10 groups', () => {
    cy.visit('/')
    cy.wait(3000)
    cy.get('#all')
    .should(($el) => {
      expect($el).to.have.text('10')
    })
  })
  
  it('action cat has alt name', () => {
    cy.get('#hasAltName')
    .should(($el) => {
      expect($el).to.have.text('Food and health')
    })
  })

  it('it finds same as on action cats by action cat id', () => {
    cy.get('#is-same-as')
    .should(($el) => {
      expect($el).to.have.text('2')
    })
  })

  it('it finds same as on action cats by term', () => {
    cy.get('#is-same-as-rev')
    .should(($el) => {
      expect($el).to.have.text('1')
    })
  })

  it('loads 4 document states', () => {
    cy.get('#document-states')
    .should(($el) => {
      expect($el).to.have.text('4')
    })
  })
  it('loads 3 jurisdictions', () => {
    cy.get('#jurisdictions')
    .should(($el) => {
      expect($el).to.have.text('3')
    })
  })

  it('loads 20 aichis', () => {
    cy.get('#aichis')
    .should(($el) => {
      expect($el).to.have.text('20')
    })
  })

  it('loads 82 subjects', () => {
    cy.get('#subjects')
    .should(($el) => {
      expect($el).to.have.text('82')
    })
  })

  it('loads 198 countries', () => {
    cy.get('#countries')
    .should(($el) => {
      expect($el).to.have.text('198')
    })
  })

  // it('loads 7 orgTypes', () => {
  //   cy.get('#org-types')
  //   .should(($el) => {
  //     expect($el).to.have.text('7')
  //   })
  // })
  
  it('loads 110 regions', () => {
 
    cy.get('#regions')
    .should(($el) => {
      expect($el).to.have.text('110')
    })
  })

  it('loads 308 geoLocations', () => {
 
    cy.get('#geo-locations')
    .should(($el) => {
      expect($el).to.have.text('308')
    })
  })

  it('load 17 sdgs', () => {

    cy.get('#sdgs')
    .should(($el) => {
      expect($el).to.have.text('17')
    })
  })

  it('loads 11 actionCategories', () => {

    cy.get('#action-categories')
    .should(($el) => {
      expect($el).to.have.text('11')
    })
  })
  
})
