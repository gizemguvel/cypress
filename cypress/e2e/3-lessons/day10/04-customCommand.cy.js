describe('Custom Command', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    });
    it('Magento - Gecerli verilerle login olma testi', () => {
        cy.magentoLogin('aedyn.kewon@fixedfor.com', '*9kJceG5*TSWXhb')
    });

    it('Magento - Gecersiz kullanici adi ile login olma testi', () => {
        cy.magentoLogin('aedyn@fixedfor.com', '*9kJceG5*TSWXhb')
    });

    it('Magento - Gecersiz sifre ile login olma testi', () => {
        cy.magentoLogin('aedyn.kewon@fixedfor.com', '*9kJceG5*T')
    });

    it('Magento - Gecersiz kullanici adi ve gecersiz sifre ile login olma testi', () => {
        cy.magentoLogin('aedyn@fixedfor.com', '*9kJceG5*T')
    });
});