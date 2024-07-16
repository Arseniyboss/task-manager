beforeEach(() => {
  cy.visit('/')
})

describe('Task Manager', () => {
  it('should add a task to all columns', () => {
    cy.getByTestId('add-task-button').each((element, index) => {
      cy.wrap(element).click()
      cy.getByTestId('add-task-input').type(`New Task{enter}`)
      cy.getByTestId('task-list').eq(index).should('contain', 'New Task')
    })
  })
  it('should delete a task', () => {
    cy.addTask('New Task')
    cy.getByTestId('delete-task-button').click()
    cy.getByTestId('task-list').first().should('not.contain', 'New Task')
  })
  it('should edit a task', () => {
    cy.addTask('New Task')
    cy.getByTestId('edit-task-input').first().clear().type('Edited Task').blur()
    cy.getByTestId('task-list').first().should('contain', 'Edited Task')
  })
  it('should reorder tasks', () => {
    cy.addTask('First Task')
    cy.addTask('Last Task')

    cy.getByTestId('task').first().as('firstTask')
    cy.get('@firstTask').focus().pressSpace().type('{downArrow}').pressSpace()

    cy.getByTestId('task').first().should('contain', 'Last Task')
    cy.getByTestId('task').last().should('contain', 'First Task')
  })
  it('should drag and drop tasks between columns', () => {
    cy.addTask('First Task')
    cy.addTask('Last Task')

    cy.getByTestId('task').first().as('firstTask')
    cy.get('@firstTask').focus().pressSpace().type('{rightArrow}').pressSpace()

    cy.getByTestId('task-list').eq(1).should('contain', 'First Task')
    cy.getByTestId('task-list').eq(0).should('not.contain', 'First Task')
  })
  it('should autosave tasks in localStorage', () => {
    cy.addTask('First Task')
    cy.addTask('Last Task')

    cy.reload()

    cy.getByTestId('task-list').first().should('contain', 'First Task')
    cy.getByTestId('task-list').first().should('contain', 'Last Task')
  })
})
