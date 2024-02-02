describe('Environment', () => {
    it("baseUrl'in environment'ta tanimlanmasi ve kullanimi", () => {
        cy.visit('/' + Cypress.env('signin'));
    });
});