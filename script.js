//your JS code here. If required.
cy.get('body').then(($body) => {
    if ($body.find('i').length) {
        cy.get('i').should('be.visible');
    } else {
        // You can log an error or handle the condition
        cy.log('i element not found');
    }
});
