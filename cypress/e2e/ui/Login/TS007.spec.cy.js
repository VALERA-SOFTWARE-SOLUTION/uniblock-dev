import auth from "../../../utils/Auth"
import { faker } from "@faker-js/faker"

describe("Login Scenario: TC007", () => {
    it("Verify if the hide/unhide button in password works correctly", () => {
        const invalidEmail = faker.internet.userName();

        cy.section("Visit the login page");
        auth.clearLoginSession();
        auth.interceptPreLoginLastCall();
        cy.visit("/");
        auth.login(invalidEmail, undefined, false);

        cy.section("Verify that the input type for password is password");
        cy.get('input[name=password]').should('have.attr', "type", "password")
        
        cy.section("Click the hide or show password icon");
        cy.get('div#__next>div>main>div:nth-of-type(2)>div>form>div>div:nth-of-type(2)>div>div>button').click()
 
        cy.section("Verify that the input type changed");
        cy.get('input[name=password]').should('have.attr', "type", "text")
    })
})