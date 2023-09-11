import auth from "../../../utils/Auth"
import { faker } from "@faker-js/faker"

describe("Login Scenario: TC004", () => {
    it("Verify login using a registered email and a blank and  incorrect password", () => {
        const invalidPassword = faker.internet.password();

        cy.section("Visit the login page");
        auth.clearLoginSession();
        auth.interceptPreLoginLastCall();
        cy.visit("/");
        auth.login(undefined, invalidPassword, false);

        cy.section("verify error message password is required");
        cy.get("div#notistack-snackbar")
            .should("be.visible")
            .invoke("text")
            .should("contains", "Wrong password");
    })
})