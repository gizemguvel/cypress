describe('Test Aşamaları', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com')
        cy.contains('Üye Ol').click()
        cy.url().should('contain', 'account/register')
    });
});