var valor1;
var valor2;
var isSecondValue = false;
var operator;
var result;

function getButtonValue(value) {
	document.getElementById("display").value = value;

	if (isSecondValue == false) {
		valor1 = value;
		isSecondValue = true;
	} else if (isSecondValue == true) {
		valor2 = value;
		isSecondValue = false;
	}
	return value;
}

function clearInput() {
	document.getElementById("display").value = "";
}

function getOperator(value) {
	document.getElementById("display").value = value;
	operator = value;
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
		result = (Number(valor1) * Number(valor2)) / 100;
	}
	document.getElementById("display").value = result;
	return result;
}


