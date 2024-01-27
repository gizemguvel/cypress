/*
    https://automationteststore.com adresini ziyaret et 
    Login ol
        Login Name = techpro
        Password = techpro!
    "Login" butonuna tıkla
    Edit account details butonuna tıkla
    Formdaki dolu olan alanları temizle
*/

describe('Odev-02', () => {
    it('Eylem Komutlarinin Kullanimi', () => {
        cy.visit('https://automationteststore.com');

        cy.contains('Login or register').click();

        cy.get('#loginFrm').within(() => {
            cy.get('#loginFrm_loginname').type('techpro')
            cy.get('#loginFrm_password').type('techpro!')
            cy.get('button').click()
        })

        cy.get('[data-original-title="Edit account details"]').click();

        cy.get('#AccountFrm_firstname').clear().type('Gürkay')
        cy.get('#AccountFrm_lastname').clear().type('Birinci')
        cy.get('#AccountFrm_email').clear().type('gurkay@birinci.com')

        cy.get('[title="Continue"]').click()

        cy.get('.alert-success').should('have.text', '\n×\nSuccess: Your account has been successfully updated.')

    });
});