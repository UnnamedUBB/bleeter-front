describe('LeftPanel navigation tests', () => {
    beforeEach(() => {
      cy.visit('/'); // Odwiedź stronę zawierającą komponent LeftPanel
    });
  
    it('Navigates to /Profile when clicking on "Profil" link', () => {
      // Kliknij na link "Profil"
      cy.contains('Profil').click();
  
      // Sprawdź, czy URL zmienia się na /Profile
      cy.url().should('include', '/Profile');
      cy.contains('Failed to fetch bleets: Network Error').should('be.visible');
    });
  });