const login = (
    email = Cypress.env("testEmail"),
    password = Cypress.env("testPassword"),
    validLogin = true
) => {
    interceptProjectByUserAPI();
    const txtEmail = "input[name='email']";
    const txtPword = "input[name='password']";
    const btnSubmit = "button[type='submit']";

    cy.get(txtEmail).clear();
    cy.get(txtEmail).type(email);
    cy.get(txtPword).clear();
    cy.get(txtPword).type(password);
    cy.get(btnSubmit).click();
    if(validLogin){ waitForProjectByUserAPI(); }
}

const clearLoginSession = () => {
    cy.clearFirebaseAuth();
}

const interceptPreLoginLastCall = () => {
    return cy.intercept("https://*.ankr.com/eth_sepolia").as("sepoliaBeacon");
}

const waitForPreLoginLastCall = () => {
    return cy.wait("@sepoliaBeacon");
}

const interceptProjectByUserAPI = () => {
    return cy.intercept("GET", "https://*/project/getProjectsByUser").as("projectByUserAPI");
}

const waitForProjectByUserAPI = () => {
    return cy.wait("@projectByUserAPI");
}


export default {
    login,
    interceptPreLoginLastCall,
    waitForPreLoginLastCall,
    clearLoginSession
}