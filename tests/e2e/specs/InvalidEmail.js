// https://docs.cypress.io/api/table-of-contents

describe("Typing an invalid email address", () => {
  it("Show an error", () => {
    cy.visit("/");
    cy.get("[type='email']").type("dddd");
    cy.get(".form-input-error-text").should(
      "have.text",
      "Enter a valid Email Address."
    );
  });
});
