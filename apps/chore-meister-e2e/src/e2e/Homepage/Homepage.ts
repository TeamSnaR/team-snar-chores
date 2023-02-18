import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit the home page', () => {
  cy.visit('http://localhost:4200');
});

Then('I should see a list of unassigned chores', () => {
  cy.get('[data-cy="chores-list"]').should('be.visible');
});
