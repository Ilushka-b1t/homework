

const returnValue = (value) => `Hello, ${value}`;


function returnArray(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            result.push(array[i]);
        }
    }
    return result.join(', ')
}

function calculator(firstNumber, secondNumber, operation) {
    let operationsArray = [
        {
            title: 'plus',
            result: (a, b) => a + b
        },
        {
            title: 'minus',
            result: (a, b) => a - b
        },
        {
            title: 'multiplication',
            result: (a, b) => a * b
        },
        {
            title: 'division',
            result: (a, b) => {
                if (b === 0) {
                    return 'На 0 делить нельзя'
                }
                return a / b
            }
        },
        {
            title: 'remainder',
            result: (a, b) => {
                if (b === 0) {
                    return 'На 0 делить нельзя'
                }
                return a % b
            }
        }
    ]
    for (let i = 0; i < operationsArray.length; i++) {
        if (operationsArray[i].title === operation) {
            return operationsArray[i].result(firstNumber, secondNumber)
        }

    }
    return 'Такой операции нет'
}

/1/
let name = "Ilya";
console.log(returnValue(name));

/2/
let array = [1, 5, 10, 15, 1114, 56, 34, 90];
console.log(returnArray(array));

/3/
let firstNumber = 6;
let secondNumber = 5;
let operation = 'remainder';
console.log(calculator(firstNumber, secondNumber, operation));
