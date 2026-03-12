// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
    name: "Ilia",
    age: 19,
    programmingLanguage: "Python",
    student: true,
}

for (key in person) {
    console.log(person[key])
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const object = {};
const isEmptyHard = object => Object.keys(object).length === 0;
const isEmptyEasy = object => {
    for (key in object) {
        return false;
    }
    return true;
};
console.log(isEmptyHard(object));
console.log(isEmptyEasy(object));
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const cloneAndModify = (object, modifications) => {
    const object2 = { ...object, ...modifications };
    return object2;
}

const task = {
    title: "Изучить Java-script",
    description: "Изучаю тему 'Объекты'",
    isCompleted: false
};

const modifications = {
    priority: "high",
    level: "medium",
    isCompleted: true
};

const newTask = cloneAndModify(task, modifications);
for (key in newTask) {
    console.log(newTask[key])
};

console.log(task);

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const callAllMethods = object => {
    for (key in object) {
        if (typeof object[key] === "function"){
            object[key]();
        }
    }
}
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};
callAllMethods(myObject);
