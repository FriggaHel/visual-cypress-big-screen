Cypress.Commands.add('visualCheckWrapper', (name, options?) => {
  cy.visualCheck(name, options);
});
