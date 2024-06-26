import { terminalLog } from "../support/a11y";

describe("App specification", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.injectAxe();
  });

  afterEach(() => {
    cy.htmlvalidate();
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });
});
