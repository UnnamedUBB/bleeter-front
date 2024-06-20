describe('template spec', () => {
    it('Should login us, visit profile and check is there are any bleets', () => {
      cy.visit('/loginpage')
      cy.get('input[type="email"]').type('newuser@gmail.com')
      cy.get('input[type="password"]').type('Password123!')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/');
      cy.contains('Profil').click();
      // Sprawdź, czy URL zmienia się na /Profile
      cy.url().should('include', '/Profile');
      cy.contains('Failed to fetch bleets: Network Error').should('not.exist');
    })
  })