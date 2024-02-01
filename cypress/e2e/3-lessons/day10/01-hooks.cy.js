describe('Hook Nedir?', () => {
    // before() hook
    // İlk test başlamadan önce bir kez çalışır, sadece bir kez çalışır.
    before(() => {
        cy.log('Tüm testlerden önce çalışır.')
    });

    // after() hook
    // Tüm testler tamamlandıktan sonra bir kez çalışır, sadece bir kez çalışır.
    after(() => {
        cy.log('Tüm testlerden sonra çalışır.')
    });

    // beforeEach() hook
    // Her testten önce çalışır
    beforeEach(() => {
        cy.log('Her testten önce çalışır.')
    });

    // afterEach() hook
    // Her testten sonra çalışır
    afterEach(() => {
        cy.log('Her testten sonra çalışır')
    });



    it('Test1', () => {
        cy.log('Test 1')
    });

    it('Test2', () => {
        cy.log('Test 2')
    });

    it('Test3', () => {
        cy.log('Test 3')
    });
});