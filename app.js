const button = document.querySelector("#changeB");
const body = document.querySelector("body");
const color = ["red", "green", "pink", "purple"];

body.style.backgroundColor = "violet";

//change background color
function changeB() {
	const colorIndex = parseInt(Math.random() * color.length);
	body.style.background = color[colorIndex];
}
// add one number to the button
function changeNumber(action) {
	let interno = document.querySelector("#Numero");

    if(action == "add"){
		interno.innerHTML = Number(interno.innerHTML) + 1;
	} else if (action == 'reset'){
        interno.innerHTML = 0;
    }
}

// Agrega un boton que reinicie el color de fondo y reinicie el valor a 0

// reset the two last buttons to initial values
function Reset() {
    // Reset number
    changeNumber('reset')

    // Reset background
    body.style.backgroundColor = "violet";

}


// Agrega un boton que cambie los valores internos entre los 2 botones (click here <-> numero)
