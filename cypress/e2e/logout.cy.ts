describe('Logout Test', () => {
    it('Logs out from the application', () => {
      // Przed testem upewnij się, że użytkownik jest zalogowany
      cy.visit('/'); // Przejdź na stronę główną lub inną stronę, gdzie możesz wylogować użytkownika
  
      // Dodaj test, który potwierdzi, że użytkownik jest zalogowany
      cy.contains('Lista Bleetów').should('be.visible'); // Na przykład sprawdź, czy jest widoczny nagłówek "Lista Bleetów"
  
      // Kliknij przycisk wylogowania
      cy.contains('Logout').click(); // Przyjmij, że przycisk do wylogowania ma napis "Logout"
  
      // Po wylogowaniu użytkownik powinien być przekierowany na stronę logowania lub inaczej obsłużone
      cy.url().should('include', '/login'); // Sprawdź, czy URL zawiera '/login'
  
      // Możesz dodać więcej asercji, aby upewnić się, że wylogowanie przebiegło pomyślnie
      cy.contains('Log in').should('be.visible'); // Na przykład sprawdź, czy jest widoczny przycisk lub link do zalogowania się
    });
  });