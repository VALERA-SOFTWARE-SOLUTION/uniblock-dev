import auth from "../../../utils/Auth"
import { faker } from "@faker-js/faker"

describe("Login Scenario: TC006", () => {
    it("Verify login using random string as the email", () => {
        const invalidEmail = faker.internet.userName();

        cy.section("Visit the login page");
        auth.clearLoginSession();
        auth.interceptPreLoginLastCall();
        cy.visit("/");
        auth.login(invalidEmail, undefined, false);

        cy.section("Verify Invalid email error message");
        cy.get('div').contains('Email must be a valid').should("be.visible");
    })
})