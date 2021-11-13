describe('Smoke tests', () => {
    beforeEach(() => {
        cy.visit('/new-delivery');
    });

    describe('URLs', () => {
        it('loads the application URL "/new-delivery"', () => {
            cy.get('[data-test="new-delivery-page"]').should('exist').and('be.visible');
        });
    });

    describe('loads new delivery components', () => {
        it('loads route-form component', () => {
            cy.get('[data-test="pick-up-add"]').should('exist').and('be.visible');
            cy.get('[data-test="delivery-add"]').should('exist').and('be.visible');
            cy.get('[data-test="drop-down-select-pick-up-city"]').should('exist').and('be.visible');
            cy.get('[data-test="drop-down-select-delivery-city"]').should('exist').and('be.visible');
        });

        it('loads date-time component', () => {
            cy.get('[data-test="pick-up-date"]').should('exist').and('be.visible');
            cy.get('[data-test="delivery-date"]').should('exist').and('be.visible');
        });

        it('loads freight-detail component', () => {
            cy.get('[data-test="freight-btn-group"]').its('length').should('eq', 4);
            cy.get('[data-test="amount"]').should('exist').and('be.visible');
            cy.get('[data-test="width"]').should('exist').and('be.visible');
            cy.get('[data-test="height"]').should('exist').and('be.visible');
            cy.get('[data-test="length"]').should('exist').and('be.visible');
            cy.get('[data-test="weight"]').should('exist').and('be.visible');
        });
    });

    describe('test navigation', () => {
        it('should redirect to the correct url', () => {
            cy.get('[data-test="links-new-delivery"]').click();
            cy.location('pathname').should('match', /\/new-delivery$/);
            cy.get('[data-test="links-deliveries"]').click();
            cy.location('pathname').should('match', /\/deliveries$/);
            cy.get('[data-test="links-history"]').click();
            cy.location('pathname').should('match', /\/history$/);
        });
    });
});
