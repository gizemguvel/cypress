describe('Eylem Metotlari - scrollTo() Metodu', () => {
    it('scrollTo() Metodunun Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/');

        // koordinat ile scroll yapma
        cy.scrollTo(0, 2000, {duration:2000})
        cy.wait(2000)

        // Position degeri ile scroll yapma
        cy.scrollTo('top', {duration:2000})

    });
});