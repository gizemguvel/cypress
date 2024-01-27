/* 
    https://www.amazon.com sitesine git
    Arama motorunda 'iphone' kelimesini ara
    Arama sonuç sayfasında 'iphone' kelimesinin arandığını doğrula
 */

describe('Uygulama-02', () => {
    it('Temel Fonksiyonlar-Amazon', () => {
        cy.visit('https://www.amazon.com');
        cy.get('#twotabsearchtextbox').type('iphone');
        cy.get('#nav-search-submit-button').click();
        cy.get('.a-color-state').should('contain', 'iphone');
    });
});