context('Github Homepage', () => {
  it('capture rendering of the homepage', () => {
    cy.visit('https://www.github.com/')

    cy.visualCheck('GH - login-page - viewport', {
      cypress: {
        capture: "viewport",
        timeout: 60 * 1000,        
      }
    });
  });
});