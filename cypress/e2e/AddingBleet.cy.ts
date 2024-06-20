describe('Add Bleet test', () => {
    
  
    it('Adds a new Bleet using the form', () => {
        cy.visit('/loginpage')
    cy.get('input[type="email"]').type('newuser@gmail.com')
    cy.get('input[type="password"]').type('Password123!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/');
      // Wprowadź dane do formularza
      cy.get('textarea').type('To jest mój nowy Bleet!'); // Wprowadź przykładową treść Bleet'a
  
      // Kliknij przycisk "Dodaj Bleet"
      cy.get('form').submit();
  
      
  
      // Możesz również sprawdzić, czy po dodaniu Bleet'a zawartość textarea została wyczyszczona
      cy.get('textarea').should('have.value', ''); // Upewnij się, że textarea jest pusta po dodaniu Bleet'a
    });
  });