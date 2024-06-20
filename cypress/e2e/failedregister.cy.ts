describe('template spec', () => {
    it('Should visit the register page, input email, password, name, click the register button', () => {
      cy.visit('/loginpage')
      cy.contains('Nie masz konta?').should('be.visible');
      cy.contains('Utwórz konto').click();
      cy.url().should('include', '/SignPage');
       // Wprowadź dane do formularza
    cy.get('input[type="email"]').type('newuser1@example.com');
    cy.get('input[type="password"]').type('Password123!');
    cy.get('input[type="userName"]').type('newuser');

    // Kliknij przycisk "Utwórz konto"
    cy.get('button[type="submit"]').click();

    
    // Jeżeli mail jest zajęty to przy 400 pojawia się komunikat
    cy.contains('Registration failed: Request failed with status code 400').should('be.visible');
    })
  })