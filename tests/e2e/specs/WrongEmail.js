// https://docs.cypress.io/api/table-of-contents

describe("Typing wrong Password", () => {
  it("Shows an alert message", () => {
    cy.visit("/");
    cy.get("[type='email']").type("mohamed@instabugg.com");
    cy.get("[type='password']").type("A12345678");
    cy.get("[type='submit']").click();
    cy.get(".form-alert-error").should("be.visible");
  });
});
