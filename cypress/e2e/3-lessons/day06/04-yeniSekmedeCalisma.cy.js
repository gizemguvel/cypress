describe('Yeni Sekmede Calisma', () => {
    it("target attribute'unu kaldirarak yeni sekmede calisma", () => {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.get('#search').type('Cypress')
    });

    
    it("target attribute'unu kaldirarak yeni sekmede calisma", () => {
        cy.visit('https://www.letskodeit.com/practice');

        // Cypress aynı URL icindeki farklı path'lere gidilmesine izin verir.
        cy.visit('https://www.letskodeit.com/courses');
        cy.get('#search').type('Cypress')

        // Cypress, farklı bir URL'e gidilmesine izin vermez.
        cy.visit('https://www.amazon.com/');
        cy.get('#twotabsearchtextbox').type('iphone')

    }); 
});