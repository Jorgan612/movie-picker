describe('Movie Adder', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('Should be able to type in the input field', () => {
    cy.get('input')
      .type('Hocus Pocus')
  })

  it('Should be able to add movie to movie list', () => {
    cy.get('input')
      .type('Hocus Pocus')
    cy.get('.add-movie-btn')
      .click()
  })

  it('Should throw error if no title entered', () => {
    cy.get('.add-movie-btn')
      .click()
    cy.get('.invalid-input-msg')
      .contains('Uh oh! Fill in the title field before trying to add a new movie title.')
  })

  it('Should display msg if not enough movies have been added yet', () => {
    cy.get('.movie-adder-section > :nth-child(4)')
      .contains('Waiting on more movies to be added...')
  })

  it('Should show edit movie list button if two or more movies have been added', () => {
    cy.get('input')
      .type('Hocus Pocus')
    cy.get('.add-movie-btn')
      .click()
    cy.get('input')
      .type('The Little Mermaid')
    cy.get('.add-movie-btn')
      .click()
    cy.get('input')
      .type('Brave Heart')
    cy.get('.add-movie-btn')
      .click()

    cy.get('.movie-list-btn')
      .should('be.visible')
  })

  it('should show Get Random Movie button if enough movies are in the list', () => {
    cy.get('input')
      .type('Hocus Pocus')
    cy.get('.add-movie-btn')
      .click()
    cy.get('input')
      .type('The Little Mermaid')
    cy.get('.add-movie-btn')
      .click()

    cy.get('.random-movie-btn')
      .click()

    cy.get('.random-movie-text')
      .should('be.visible')
  })
})