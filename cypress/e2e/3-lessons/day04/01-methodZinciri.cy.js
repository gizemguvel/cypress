/* 
    https://automationteststore.com sitesine git
    'Contact Us' bağlantısına tıkla
    Kayıt formunu tamamla
    Kaydın gerçekleştiğini doğrula
*/
describe('Method Zinciri', () => {
    it('Method zinciri kullanımı', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.info_links_footer').contains('Contact Us').click();

        cy.get('#ContactUsFrm').within(() => {
            cy.get('#ContactUsFrm_first_name').type('Gürkay')
            cy.get('#ContactUsFrm_email').type('gurkay@birinci.com')
            cy.get('#ContactUsFrm_enquiry').type('Selamlar')
            cy.get('[title="Submit"]').click()
        });

        cy.get('.mb40').find('p').should('exist').
        and('be.visible').
        and('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
});