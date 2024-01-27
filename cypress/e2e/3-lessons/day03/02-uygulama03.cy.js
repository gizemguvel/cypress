/*
    https://automationteststore.com adresini ziyaret et
    Login ol
        Login Name = techpro
        Password = techpro!
    "Login" butonuna tıkla
    "Welcome back" metni ile login işleminin başarılı olduğunu kontrol et
*/
describe('Uygulama-03', () => {
    it('CSS Selector Kullanımı', () => {
        cy.visit('https://automationteststore.com');

        cy.url().should('contain', 'automationteststore');

        cy.title().should('include', 'practice');

        cy.contains('Login or register').click();

        cy.get('[id="loginFrm_loginname"]').type('techpro');

        cy.get('[id="loginFrm_password"]').type('techpro!');

        cy.get('[title="Login"]').click();

        cy.get('[class="menu_text"]').should('contain.text', 'Welcome back')
    });
});