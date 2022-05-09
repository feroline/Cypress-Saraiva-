import '../../integration/homePage/homePage.feature';


Given('The user access {string}', (url) => {
    cy.visit(url)
    cy.url().should('be.contains', 'saraiva');
});

Then('The user should see {string}', (text) => {

    let body = document.querySelector('body');
    cy.wrap(body).should('contain.text', text);
    
});




