describe('fixture() - Coklu Data Kullanimi', () => {
    let dataSeti;

    before(() => {
        cy.visit('https://www.kitapyurdu.com/');
        cy.fixture('kitapyurdu2').then((veriler) => {
            dataSeti = veriler
        })
    });

    it('Kitap Yurdu - Arama kelimelerinin testi', () => {
        dataSeti.forEach((testData) => {
            cy.get('#search-input').type(testData.kelime)
            cy.get('.button-search').click()
            cy.get('h1').should('contain', testData.kelime)
            cy.get('#search-input').clear()
        })
    });
});