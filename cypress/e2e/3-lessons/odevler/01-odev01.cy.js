/* 
    https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
    İletişim Formunu doldur
    "SUBMIT" butonuna tıkla
    Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
*/
describe('Odev01', () => {
    it('CSS selector kullanımı', () => {
        
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');


        cy.url().should('eq', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html') 
        // url() fonksiyonu mevcut sayfanın URL'sini kontrol etmek icin kullanilir
        // 'eq', 'equal' yani 'esit' anlamina gelir ve iki degeri karsilastirmak icin kullanilir
        
        cy.title().should('contain', 'Contact Us')
        // title() fonksiyonu mevcut sayfanin basligini kontrol etmek icin kullanilir

        cy.get('[name="first_name"]').type('Gizem');
        cy.get('[name="last_name"]').type('Güvel');
        cy.get('[name="email"]').type('123@hotmail.com');
        cy.get('[name="message"]').type('message');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });
});