describe("Login Scenario: TC003", () => {
    it("Verify login using google account", () => {
        cy.section("Visit the login page");
        cy.visitWithFreshLogin();

        cy.section("Verify succesfull login");
        cy.url().should('eq', Cypress.env("dashboard").url);
        cy.title().should('eq', Cypress.env("dashboard").title);
    })
})