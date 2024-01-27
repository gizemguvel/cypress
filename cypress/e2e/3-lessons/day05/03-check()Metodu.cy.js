describe('Eylem Metotlari - check() Metodu', () => {
    it('check() Metodunun Kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        // CHECKBOX
        // Tumunu isaretle
        cy.get('[type="checkbox"][name="cars"]').check().should('be.checked')

        // Tumunun isaretini kaldir
        cy.get('[type="checkbox"][name="cars"]').uncheck().should('not.be.checked')

        // Ilkini sec
        cy.get('[type="checkbox"][name="cars"]').first().check()

        // Value ile secme
        cy.get('[type="checkbox"][name="cars"]').check('benz')

        // Value ile secimi kaldir
        cy.get('[type="checkbox"][name="cars"]').uncheck('benz')

        // Birden fazla secim yapma
        cy.get('[type="checkbox"][name="cars"]').check(['benz', 'honda'])

        // Birden fazla secim kaldirma
        cy.get('[type="checkbox"][name="cars"]').uncheck(['bmw', 'benz', 'honda'])


        // RADIO BUTTONS
        // Secim yapma
        cy.get('[type="radio"][name="cars"]').check()

        // Value ile secme
        cy.get('[type="radio"][name="cars"]').check('benz')

        cy.get('[type="radio"][name="cars"]').uncheck('benz')
        // uncheck() metodu sadece checkbox'lar ile calisir, radio buttonlar ile kullanilamaz
    });
});