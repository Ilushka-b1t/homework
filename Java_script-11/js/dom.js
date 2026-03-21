import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosLocalStorage } from "./storage.js";


const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosList = document.querySelector('.todos');


const createTodoElement = todo => {
    const todoElement = document.createElement('li');
    todoElement.classList.add('todo');
    todoElement.dataset.id = todo[todoKeys.id];
    todoElement.innerHTML =
        `<div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
        <button class="button-complete button">&#10004;</button>
        <button class="button-delete button">&#10006;</button>
    </div>`
    return todoElement;
};

export const renderTodos = (todos) => {
    todosList.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        if (todo[todoKeys.is_completed]) {
            todoElement.classList.add("completed")
        }
        todosList.prepend(todoElement);
    })
};


export const handleCreateTodo = (todos, text) => {
    const todo = createTodo(todos, text);
    const todoElement = createTodoElement(todo);
    setTodosLocalStorage(todos);
    todosList.prepend(todoElement);
};

export const initTodoHandlers = (todos) => {

    form.addEventListener("submit", event => {
        event.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        handleCreateTodo(todos, text);
        input.value = "";
    })

    todosList.addEventListener("click", event => {
        const buttonComplete = event.target.closest('.button-complete');
        const buttonDelete = event.target.closest('.button-delete');
        if (buttonComplete) {
            const todo = buttonComplete.closest('.todo');
            completeTodoById(todos, Number(todo.dataset.id));
            setTodosLocalStorage(todos);
            todo.classList.toggle('completed');
        }
        if (buttonDelete) {
            const todo = buttonDelete.closest('.todo');
            deleteTodoById(todos, Number(todo.dataset.id));
            setTodosLocalStorage(todos);
            todo.remove();
        }
    });
}