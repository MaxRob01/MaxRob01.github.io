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

	//console.log(valor1, valor2);
	return value;
}

/*function clearInput () {
	document.getElementById("display").value = "";
}*/

function getOperator(value) {
	document.getElementById("display").value = value;
	operator = value;
}

function operation() {
	if (operator == "+") {
		result = Number(valor1) + Number(valor2);
		//console.log(result);
	} else if (operator == "-") {
		result = Number(valor1) - Number(valor2);
		//console.log(result);
	} else if (operator == "*") {
		result = Number(valor1) * Number(valor2);
		//console.log(result);
	} else if (operator == "÷") {
		result = Number(valor1) / Number(valor2);
		//console.log(result);
	}
	return result
}

//cuando hago click en el boton de la operacion guardar el valor del input en una variable y guardar la operacion en una segunda variable
//crar una funcion "operacion"
//cuando hago click en boton igual asigne el valor del input y corra una funcion que haga la operacion
