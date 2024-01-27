describe('Temel Test Fonksiyonları', () => {
    it('visit(), get(), click(), type(), should() fonksiyonlarının kullanımı', () => {
        
        cy.visit('url');
         
        cy.get('locator').should("be.visible").click();
        
        cy.get('locator').should("Doğrulayıcı","").type("Metin").should("Doğrulayıcı","Metin");

    });
});