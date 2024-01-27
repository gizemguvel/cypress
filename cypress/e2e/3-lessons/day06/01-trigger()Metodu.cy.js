describe('Eylem Metotlari - trigger() Metodu', () => {
    it('trigger() Metodunun Kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').trigger('mouseover');
        cy.wait(3000)

        cy.get('[href="#top"]').click({force:true});

    });

    it.only('trigger() Metodunun Kullanimi - Amazon Sitesi', () => {
        cy.visit('https://www.amazon.com/');

        cy.get('#icp-nav-flyout').trigger('mouseover');

    });
});