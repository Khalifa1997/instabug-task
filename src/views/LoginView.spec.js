import { mount } from "@cypress/vue";
import LoginView from "./LoginView.vue";
describe("Logging in with Wrong E-mail", () => {
  it("Shows an Alert", () => {
    const msg = "Hello Cypress Component Testing!";
    mount(LoginView, {
      propsData: {
        msg,
      },
    });

    cy.get("h1").should("have.text", msg);
  });
});
