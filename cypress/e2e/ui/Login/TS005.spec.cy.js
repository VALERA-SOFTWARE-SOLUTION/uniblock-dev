import auth from "../../../utils/Auth"
import { faker } from "@faker-js/faker"

describe("Login Scenario: TC005", () => {
    it("Verify login using an unregistered email", () => {
        const invalidEmail = faker.internet.email();

        cy.section("Visit the login page");
        auth.clearLoginSession();
        auth.interceptPreLoginLastCall();
        cy.visit("/");
        auth.login(invalidEmail, undefined, false);

        cy.section("Verify error message showing user not found");
        cy.get("div#notistack-snackbar")
            .should("be.visible")
            .invoke("text")
            .should("contains", "User not found");
    })
})