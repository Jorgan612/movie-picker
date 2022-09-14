describe('Movie List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    cy.get('input')
      .type('Hocus Pocus')
    cy.get('.add-movie-btn')
      .click()

    cy.get('input')
      .type('The Little Mermaid')
    cy.get('.add-movie-btn')
      .click()
  })

  it('Should be able to click Edit Movie List button if there are enough movies in the list ', () => {  
    cy.get('.movie-list-btn')
      .click()
  })

  it('Should display a list of added movies', () => {
    cy.get('.movie-list-btn')
      .click()

    cy.get('.movie-list-div')
      .children()
      .should('have.length', 2)
  })

  it('Should display movie title and remove button on each card', () => {
    cy.get('.movie-list-btn')
      .click()

    cy.get(':nth-child(1) > .movie-name')
      .contains('Hocus Pocus')

    cy.get(':nth-child(1) > .movie-card-top')
      .contains('X')
  })

  it('Should remove a movie card if the Remove button is clicked', () => {
    cy.get('.movie-list-btn')
      .click()

    cy.get(':nth-child(1) > .movie-card-top')
      .children()
      .click()

    cy.get('.movie-list-div')
      .children()
      .should('have.length', 1)
  })

  it('Should display add more movies msg if the list has less than two movies', () => {
    cy.get('.movie-list-btn')
      .click()

    cy.get(':nth-child(1) > .movie-card-top')
      .children()
      .click()

    cy.get('.movie-adder-section > :nth-child(4)')
      .should('be.visible')
  })

  it('Should close movie list window if Close List button is clicked.', () => {
    cy.get('.movie-list-btn')
      .click()

    cy.get('.close-movie-list-btn')
      .click()
  })

})  
