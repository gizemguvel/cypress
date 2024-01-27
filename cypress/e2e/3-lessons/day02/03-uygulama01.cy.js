/* 
    https://www.kitapyurdu.com sitesine git
    'Üye Ol' bağlantısına tıkla
    Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula 
*/
describe('Uygulama-01', () => {
    it('Temel fonksiyonların kullanımı', () => {
        //https://www.kitapyurdu.com sitesine git
        cy.visit('https://www.kitapyurdu.com');

        //'Üye Ol' bağlantısına tıkla
        cy.get('.register > a').click();

        //Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula 
        cy.get('#register-name').type("Gizem").should('have.value', 'Gizem');

    });
});
