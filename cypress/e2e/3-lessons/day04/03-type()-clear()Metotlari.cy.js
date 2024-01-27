describe('Eylem Metotlari - type() ve clear() Metotlari', () => {
    it.only('type() ve clear() Metotlarinin Kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        // Normal şekilde metin ekleme
        // cy.get('#enabled-example-input').type('Techpro')

        // Option ile kullanma
        // Force
        cy.get('#disabled-button').click()
        cy.get('#enabled-example-input').type('Techpro', { force: true })
        cy.wait(3000)
        cy.get('#enabled-example-input').clear({ force: true })

        // Sequence
        // cy.get('#enabled-example-input').type('asdf{selectAll}{backspace}', {delay:1000})
    });

    it('Kitap Yurdu Arama Motorunda Sequence Kullanimi', () => {
        cy.visit('https://www.kitapyurdu.com/');

        cy.get('#search-input').type('Cypress{enter}')
    });
});