var valor1;
var valor2;
var isSecondValue = false;
var operator;
var result;

function getButtonValue(value) {
	if (isSecondValue == false) {
		valor1 ? (valor1 = valor1 + value) : (valor1 = value);
		document.getElementById("display").value = valor1;
	} else if (isSecondValue == true) {
		valor2 ? (valor2 = valor2 + value) : (valor2 = value);
		document.getElementById("display").value = valor2;
	}

	return value;
}

function clearInput() {
	valor1 = "";
	valor2 = "";
	result = "";
	isSecondValue = false;
	document.getElementById("display").value = "";
}

function getOperator(value) {
	document.getElementById("display").value = value;
	operator = value;
	isSecondValue = true;
	valor2 = "";
}

function switchSign() {
	var inputNumb = document.getElementById("display").value;
	var numberSign = inputNumb * -1;
	var inputNumb = (document.getElementById("display").value = numberSign);
}

function operation() {
	if (operator == "+") {
		result = Number(valor1) + Number(valor2);
	} else if (operator == "-") {
		result = Number(valor1) - Number(valor2);
	} else if (operator == "*") {
		result = Number(valor1) * Number(valor2);
	} else if (operator == "÷") {
		result = Number(valor1) / Number(valor2);
	} else if (operator == "%") {
		result = (Number(valor2) * Number(valor1)) / 100;
	}
}

function equal() {
	document.getElementById("display").value = result;
	valor1 = result;
}
