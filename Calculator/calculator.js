console.log("works");

function sumar() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let sumInputs = firstInput + secondInput;
	console.log(sumInputs);
}

function restar() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let subInputs = firstInput - secondInput;
	console.log(subInputs);
}

function multiplicar() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let multInputs = firstInput * secondInput;
	console.log(multInputs);
}

function dividir() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let divInputs = firstInput / secondInput;
	console.log(divInputs);
}



