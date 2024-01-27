describe('Mouseover Islemi', () => {
    it('invoke() Metoduyla Mouseover', () => {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').scrollIntoView()
        cy.get('[class="mouse-hover-content"]').invoke('show')
        cy.get('[href="#top"]').click();

    });

    it.only('invoke() Metoduyla Mouseover - eBay Sitesi', () => {
        cy.visit('https://www.ebay.com/');

        cy.get('#gh-eb-My-o').invoke('show')
        cy.contains(' Messages').click()
    });
});