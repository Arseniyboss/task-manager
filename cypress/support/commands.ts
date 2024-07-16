/// <reference types="cypress" />

Cypress.Commands.add('getByTestId', (testId) => {
  cy.get(`[data-testid=${testId}]`)
})

Cypress.Commands.add('addTask', (task) => {
  cy.getByTestId('add-task-button').first().click()
  cy.getByTestId('add-task-input').type(`${task}{enter}`)
  cy.getByTestId('task-list').first().should('contain', task)
})

Cypress.Commands.add('pressSpace', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).trigger('keydown', { keyCode: 32, force: true })
})
