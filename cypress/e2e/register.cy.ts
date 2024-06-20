describe('template spec', () => {
    it('Should visit the register page, input email, password, name, click the register button', () => {
      cy.visit('/loginpage')
      cy.contains('Nie masz konta?').should('be.visible');
      cy.contains('Utwórz konto').click();
      cy.url().should('include', '/SignPage');
       // Wprowadź dane do formularza
    cy.get('input[type="email"]').type('newuser@gmail.com');
    cy.get('input[type="password"]').type('Password123!');
    cy.get('input[type="userName"]').type('exampleuser');

    // Kliknij przycisk "Utwórz konto"
    cy.get('button[type="submit"]').click();

    // Potwierdź, że użytkownik został zarejestrowany i przekierowany na stronę logowania
    cy.url().should('include', '/LoginPage');
   
    
    })
  })