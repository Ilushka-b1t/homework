export const getTodosFormLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));

};