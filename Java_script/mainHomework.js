
//1/-/2// 
const descriptionMe = {
    name: 'Ilya',
    age: '19',
    starus: 'student',
    hobby: 'programming',
    greet: function returnName(name) {
        return `Hello ${name}`;
    }

};
console.log(descriptionMe.greet('Danil'));
console.log(descriptionMe.greet(descriptionMe.name));

/3/

function returnIsAdmin(usersArray){
    let count = 0;
    for (let i = 0; i < usersArray.length; i++){
        if (usersArray[i].isAdmin){
            count++;
        }
    }
    return `Кол-во пользователей: ${count}`
};


const users = [
    {
        name: 'Anna',
        age: 25,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Maria',
        age: 22,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 28,
        isAdmin: false
    },
    {
        name: 'Sophia',
        age: 35,
        isAdmin: true
    },
    {
        name: 'Mike',
        age: 26,
        isAdmin: false
    },
    {
        name: 'Elena',
        age: 31,
        isAdmin: false
    },
    {
        name: 'David',
        age: 29,
        isAdmin: true
    },
    {
        name: 'Olga',
        age: 24,
        isAdmin: false
    },
    {
        name: 'Peter',
        age: 33,
        isAdmin: false
    }
];

console.log(returnIsAdmin(users));

