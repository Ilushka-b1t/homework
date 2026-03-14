"use strict";

// Задание 1.
// Дан массив пользователей:
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

users.push({ name: 'Ann', age: 19, isAdmin: false }, { name: 'Jack', age: 43, isAdmin: true });
console.log(users);


// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = users => {
    let sumAge = 0;
    for (let i = 0; i < users.length; i++) {
        sumAge += users[i].age;
    };
    return sumAge / users.length;
}
console.log(getUserAverageAge(users));


// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
const getAllAdmins = users => {
    let arrIsAdmin = [];
    users.forEach(element => {
        if (element.isAdmin) {
            arrIsAdmin.push(element)
        }
    });
    return arrIsAdmin;
}
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
const first = (arr, n) => {
    if (arr.length < n || n < 0) {
        console.error("Ошибка");

    }
    else if (n === undefined) {
        return arr[0];
    }
    else{
        return arr.slice(0, n);
    };

}
console.log(first(users, 4));