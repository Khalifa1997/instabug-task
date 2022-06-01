// https://docs.cypress.io/api/table-of-contents

describe("Typing wrong Password", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("[type='email']").type("mohamed@instabug.com");
    cy.get("[type='password']").type("A12345678");
    cy.get("[type='submit']").click();
    cy.get(".welcome").should("be.visible");
  });
});
