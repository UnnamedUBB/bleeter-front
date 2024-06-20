describe('template spec', () => {
  it('Should visit the login page, input email, click the login button, and then logout', () => {
    cy.visit('/loginpage')
    cy.get('input[type="email"]').type('newuser@gmail.com')
    cy.get('input[type="password"]').type('Password123!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/');
     // Kliknij przycisk wylogowania
     cy.get('.flex.space-x-5.px-5.py-5.rounded-lg.hover\\:bg-slate-900.hover\\:px-5.hover\\:py-5.border.border-red-900')
     .contains('Wyloguj')
     .click();
  })
})