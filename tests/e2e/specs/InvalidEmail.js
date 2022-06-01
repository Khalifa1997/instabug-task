// https://docs.cypress.io/api/table-of-contents

describe("Typing wrong Password", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("[type='email']").type("dddd");
    cy.get(".form-input-error-text").should(
      "have.text",
      "Enter a valid Email Address."
    );
  });
});
