import auth from "../../../utils/Auth"
import { faker } from "@faker-js/faker"

describe("Login Scenario: TC009", () => {
    it("Verify the forget password function for registered account", () => {
        const invalidEmail = faker.internet.email();

        cy.section("Visit the login page");
        auth.clearLoginSession();
        auth.interceptPreLoginLastCall();
        cy.visit("/");
        auth.login(invalidEmail, undefined, false);

        cy.section("Navigate to Forget Password page");
        cy.get('a').contains('Forgot password')
            .click();
            
        cy.section("Verify that the url changed to auth/reset-password");
        cy.url().should('includes', 'auth/reset-password');

        cy.section("Confirm that there is a link for going back to sign in");
        cy.get('a').contains('Return to ').should('exist')
            .click();

        cy.section("Verify if the url is correct ");
        cy.url().should('includes', 'auth/login');
    })
})