function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, operator, num2) {
	switch (operator) {
		case "+":
			return add(num1, num2);
			break;
		case "-":
			return subtract(num1, num2);
			break;
		case "*" || "x" || ".":
			return multiply(num1, num2);
			break;
		case "/":
			return divide(num1, num2);
			break;
		default: 
			break;
	}
}

function clearScreen(screen) {
	screen.textContent = "";
}

let operation;
let num1;
let num2;
let numberButtons = document.querySelectorAll(".number-buttons > button");
let clearButton = document.querySelector(".config-buttons > .clear");
let opButtons = document.querySelectorAll(".op-buttons > button");
let equalsButton = document.querySelector(".config-buttons > .equals");
let screenBox = document.querySelector("#calc-container > .screen");

clearButton.addEventListener("click", (e) => {
	clearScreen(screenBox);
});

numberButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		screenBox.textContent += e.target.textContent;	
	});
});

opButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		operation = e.target.textContent;
		num1 = screenBox.textContent;
		console.log(num1);
		clearScreen(screenBox);
	});	
});

