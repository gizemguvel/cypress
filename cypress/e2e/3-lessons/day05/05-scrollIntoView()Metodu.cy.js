describe('Eylem Metotlari - scrollIntoView() Metodu', () => {
    it('scrollIntoView() Metodunun Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/');

        // Hızlı Scroll
        cy.get('#actions').scrollIntoView()

        // Yavas Scroll
        cy.get('#contact-us').scrollIntoView({duration:2000})

    });
});