describe('Listelerle Çalışmak', () => {
    it('Kitap Yurdu - each() ve wrap() metotlarinin kullanimi', () => {
        cy.visit('https://www.kitapyurdu.com/');

        cy.get('.bestseller-cr').find('.name').each(($kitap) => {
            cy.log($kitap.text())
            cy.wrap($kitap).should('be.visible')
        })
    });

    it('Tool Shop - each() ve wrap() metotlarinin kullanimi', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');

        cy.get('.col-md-9').find('.card-title').each(($urun) => {
            cy.log($urun.text())
            cy.wrap($urun)
                .invoke('text') // Elementin text özelliğini alır
                .should('exist')
                .and('have.length.gte', 3) // Text en az 3 karakterli mi dogrulamasi
        })
    });
});