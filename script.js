function countDecimals(num) {
	if (num.toString().includes(".")) {
		return num.toString().split(".")[1].length;	
	} else {
		return 0;
	}
}

function findMaxDecimals(num1, num2) {
	let count1 = countDecimals(num1);
	let count2 = countDecimals(num2);
	return count1 > count2 ? count1 : count2;
}

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
	if (num2 == 0 && operator === "/") {
		alert("Erm, What the sigma?");
		return 69420;
	}
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
let numberButtons = document.querySelectorAll(".number-buttons > button.number, .number-buttons > #zero-button");
let clearButton = document.querySelector(".config-buttons > .clear");
let opButtons = document.querySelectorAll(".op-buttons > button, .config-buttons > .divide");
let equalsButton = document.querySelector(".config-buttons > .equals");
let backButton = document.querySelector(".backspace-container > button#back-button");
let pointButton = document.querySelector(".number-buttons > #point-button");
let screenBox = document.querySelector("#calc-container > .screen");
let allButtons = document.querySelectorAll("button");

backButton.addEventListener("click", (e) => {
	screenBox.textContent = screenBox.textContent.slice(0, -1);
});

allButtons.forEach((button) => {
	button.addEventListener("mouseover", (e) => {
		e.target.style.backgroundImage = "linear-gradient(rgb(0 0 0/20%) 0 0)";	
	});
	button.addEventListener("mouseout", (e) => {
		e.target.style.backgroundImage = "none";
	});
});

allButtons.forEach((button) => {
	button.addEventListener("mouseout", (e) => {		
		e.target.style.backgroundImage = "none";
	});
});

clearButton.addEventListener("click", (e) => {
	clearScreen(screenBox);
	num1, num2, operation = null;
});

numberButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		screenBox.textContent += e.target.textContent;	
	});
});

pointButton.addEventListener("click", (e) => {
	if (!(screenBox.textContent.includes("."))) {
		screenBox.textContent += e.target.textContent;
	}
});

opButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		operation = e.target.textContent;
		num1 = parseFloat(screenBox.textContent);
		console.log(num1);
		clearScreen(screenBox);
	});	
});

equalsButton.addEventListener("click", (e) => {
	num2 = parseFloat(screenBox.textContent);
	if (num1 == null || num2 == null || operation == null) {
		alert("Enter something first!");
	} else {
		screenBox.textContent = operate(num1, operation, num2).toFixed(findMaxDecimals(num1, num2));
	}
});
