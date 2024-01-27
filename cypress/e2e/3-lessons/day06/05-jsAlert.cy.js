describe('Alert', () => {
    it('Alert mesajini dogrulamak', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert', (mesaj) => {
            expect(mesaj).to.equal('I am a JS Alert')
        })
    });

    it('Alert mesajinda Iptal butonuna basmak', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', () => {
            return false
            // false degeri iptal butonuna otomatik olarak basar
            // true degeri tamam butonuna otomatik olarak basar
        })

    });

    it.only('Alert Prompt alanina metin girmek', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((AlertPenceresi) => {
            cy.stub(AlertPenceresi, 'prompt').returns('Cypress')
            cy.get('[onclick="jsPrompt()"]').click();
        })
        // Bu kod ile Alert penceresindeki prompt alanına mesaj yazdık.
        
    });
});