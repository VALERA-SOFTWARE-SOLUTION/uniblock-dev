import auth from "../../../utils/Auth"
import { faker } from "@faker-js/faker"

describe("Login Scenario: TC008", () => {
    it("Verify the forget password function for registered account", () => {
        const invalidEmail = faker.internet.email();

        cy.section("Visit the login page");
        cy.visit("/");
        auth.login(invalidEmail, undefined, false);

        cy.section("Confirm that there is a button for forget password");
        cy.get('a').contains('Forgot password')
            .click();
            
        cy.section("Verify that the url changed to auth/reset-password");
        cy.url().should('includes', 'auth/reset-password');
    })
})