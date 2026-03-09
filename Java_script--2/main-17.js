// Задача 1.
const number = 3;
if (number % 2 == 0) {
    console.log(number + " - чётное число");
}
else {
    console.log(number + " - нечётное число");
}


// Задача 2.
const age = +prompt("Ваш возраст:");
let discount = age < 18 ? 10 : (18 <= age && age <= 65) ? 20 : 30;
console.log(`Размер скидки - ${discount}`);


let discountSwitch;
switch (true) {
    case age < 18:
        discountSwitch = 10;
        break;
    case (18 <= age && age <= 65):
        discountSwitch = 20;
        break;
    default:
        discountSwitch = 30;
}
console.log(`Размер скидки - ${discountSwitch}`);


// Задача 3.
const password = prompt("Введите пароль:", "")
let answer = (username === "admin" || username === "user") && (password === "123456") ? "Доступ разрешен" : "Доступ запрещен";
console.log(answer);


// *Задача 4.
const parcelWeight = +prompt("Вес посылки:");
const deliveryType = prompt("Тип доставки:");
if (parcelWeight >= 0) {
    const baseCost = parcelWeight < 1 ? 5 : (1 <= parcelWeight && parcelWeight <= 5) ? 10 : 15;
    let examinationDelivery = true;
    let coefficient;
    switch (deliveryType) {
        case "Стандарт":
            coefficient = 1;
            break
        case "Экспресс":
            coefficient = 1.5;
            break
        case "Премиум":
            coefficient = 2;
            break
        default:
            examinationDelivery = false;
    }
    if (examinationDelivery) {
        const finalCost = baseCost * coefficient;
        alert(`Итоговая стоимость доставки: ${finalCost}$.`);
    }
    else {
        alert("Неверный тип доставки");
    }
}
else {
    alert("Некорректный вес посылки");
}