/// <reference types="cypress" />

import pageTodo from "../../support/ui/Todo";

describe("TodoMVC", () => {
  beforeEach(() => {
    cy.fixture("ui/data.json").as("data");
  });

  before(() => {
    pageTodo.navigate();
  });

  it("should create new todos", function () {
    pageTodo.create(this.data.newTodo);
    pageTodo.create(this.data.newTodo2);
    pageTodo.validateTodoCreation(2, this.data.newTodo, this.data.newTodo2);
  });

  it("should mark todo as completed", function () {
    pageTodo.markTodoAsCompleted(this.data.newTodo);
    pageTodo.validateTodoIsCompleted(this.data.newTodo);
  });

  it("should clear completed", function () {
    pageTodo.clearCompetedTodos();
    pageTodo.validatedTodosCleared(1, this.data.newTodo);
  });
});
