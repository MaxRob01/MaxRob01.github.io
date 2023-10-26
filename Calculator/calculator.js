console.log("works");

function sumar() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let addInputs = firstInput + secondInput;
	console.log(addInputs);

	document.getElementById("result").innerHTML = addInputs;
}

function restar() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let addInputs = firstInput - secondInput;
	console.log(addInputs);

	document.getElementById("result").innerHTML = addInputs;
}

function multiplicar() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let addInputs = firstInput * secondInput;
	console.log(addInputs);

	document.getElementById("result").innerHTML = addInputs;
}

function dividir() {
	let firstInput = parseInt(document.getElementById("first").value);
	let secondInput = parseInt(document.getElementById("second").value);
	let addInputs = firstInput / secondInput;
	console.log(addInputs);

	document.getElementById("result").innerHTML = addInputs;
}
