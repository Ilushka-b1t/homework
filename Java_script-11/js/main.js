import { getTodosFormLocalStorage } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./dom.js";


const todos = getTodosFormLocalStorage() || [];


document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});


