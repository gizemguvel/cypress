describe('Listelerle Calismak', () => {
    it('Kitap Yurdu - Arama listesindeki urun basliklarini dogrulama', () => {
        cy.visit('https://www.kitapyurdu.com/');

        let arananKelime = 'java'
        cy.get('#search-input').type(`${arananKelime}{enter}`)

        cy.get('.product-list').find('.name').each(($urunAdi) => {
            cy.wrap($urunAdi).invoke('text').then((listedekiBaslik) => {
                expect(listedekiBaslik.toLowerCase()).to.include(arananKelime)
            })
        })

    });
});