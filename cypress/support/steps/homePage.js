import homePage from '../../integration/homePage/homePage.feature';

Given('The user access {string} ##baseURL', (url) => {
    cy.visit(url)
    cy.url.should('be.contains', url);
});

Then('The user should see {string}', (text) => {
    cy.wrap(cy.get('body')).should('be.contain.text', text);
});



