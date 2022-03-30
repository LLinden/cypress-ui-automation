/// <reference types="Cypress" />

const el = require("./elements").ELEMENTS;
class Todo {
  navigate() {
    cy.visit(`${Cypress.env("TODOMVC")}`);
  }

  create(text) {
    cy.get(el.inputNewTodo).type(text + "{enter}");
  }

  validateTodoCreation(quantity, text, text2) {
    cy.get(el.todoList)
      .should("have.length", quantity)
      .should("have.text", text + text2);
  }

  markTodoAsCompleted(text) {
    cy.contains(text).parent().find(el.inputTypeCheck).check();
  }

  validateTodoIsCompleted(text) {
    cy.contains(text).parents("li").should("have.class", "completed");
    cy.get(el.listLabel).should(
      "have.css",
      "text-decoration",
      "line-through solid rgb(217, 217, 217)"
    );
  }

  clearCompetedTodos() {
    cy.contains("Clear completed").click();
  }

  validatedTodosCleared(quantity, text) {
    cy.get(".todo-list li")
      .should("have.length", quantity)
      .should("not.have.text", text);
    cy.contains("Clear completed").should("not.exist");
  }
}
export default new Todo();
