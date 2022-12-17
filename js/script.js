"use strict";

console.log("35" + - "22");
console.log("35" * "22");


let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

console.log(!false && 11 || 18 && !'');

let name = 0;
console.log(name ?? 'Без имени')


// if while, задача №1
if (1 === "1") {
	console.log("Истина!");
} else {
	console.log("Ложь!");
}

// if while, задача №2
if (5 == "5") {
	console.log("Истина!");
} else {
	console.log("Ложь!");
}

// if while, задача №3
let massage = (92 > '11' && 58 < 100) ? "Истина!" : "Ложь!";
console.log(massage);

// if while, задача №4
if (0) {
	console.log("Ложь!");
} else if (" ") {
	console.log("Истина!");
}


// Цикли, задача №1
for (let i = 1; i < 6; ++i) {
	console.log(i);
}

// Цикли, задача №2
let num = 8;
while (num) {
	console.log(num);
	num--;
}

// Цикли, задача №3
let number = 0;
while (number < 3) {
	console.log(`Число: ${number}`);
	number++;
}

// Цикли, задача №4
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}


// Числа, задача №1
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Числа, задача №2
let value = "135.58px";
value = parseFloat(value);
console.log(value);

// Числа, задача №3
let valueOne = 58 + "Фрилансер";
if (isNaN(valueOne)) {
	console.log("Результат выражения NaN");
}

// Числа, задача №4
console.log(Math.max(10, 58, 39, -150, 0));

// Числа, задача №5
console.log(Math.floor(58.858));



// Рядки, задача №1
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
console.log(text);

// Рядки, задача №2
let textOne = "фрилансер";
console.log(textOne[5]);


// Рядки, задача №3
let textTwo = 123 + "456";
console.log(textTwo);
// не вірно, вернеться 123456
// Способи вирішення:
// 1
let textThree = 123 + Number("456");
console.log(textThree);

// 2
let textFour = 123 + +"456";
console.log(textFour);

// 3
let textFive = 123 + parseInt("456");
console.log(textFive);


// Рядки, задача №4
console.log(textOne.toUpperCase());

// Рядки, задача №5
console.log(textOne.slice(3, 6));

// Рядки, задача №6
console.log(textOne.includes("лан", 4));
// буде false
// щоб було true, потрiбно вказати:
console.log(textOne.includes("лан", 3));