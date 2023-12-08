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
	console.log(valor1 + " getvalue v1");
	console.log(valor2 + " getvalue v2");
	console.log(result + " getvalue result");
	console.log(isSecondValue + " getButtonValue");
	return value;
}

function clearInput() {
	valor1 = "";
	valor2 = "";
	result = "";
	isSecondValue = false;
	document.getElementById("display").value = "";

	console.log(valor1 + " clearinput v1");
	console.log(valor2 + " clearinput v2");
	console.log(result + " clearinput result");
	
	console.log(isSecondValue + " clearInput")
}

function getOperator(value) {
	document.getElementById("display").value = value;
	operator = value;
	isSecondValue = true;
	console.log(isSecondValue + " getOperator");
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
	document.getElementById("display").value = result;
	console.log(isSecondValue + " operation");
	return result;
}

function switchSign() {
	var inputNumb = document.getElementById("display").value;
	var numberSign = inputNumb * -1;
	var inputNumb = (document.getElementById("display").value = numberSign);
}

/// A resolover: AC button tiene que resetear todo. var result tiene que poder recibir una nueva operacion.
