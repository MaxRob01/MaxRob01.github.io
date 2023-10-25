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
function addOne() {
	let interno = document.querySelector("#Numero");
	interno.innerHTML = Number(interno.innerHTML) + 1;
}

// Agrega un boton que reinicie el color de fondo y reinicie el valor a 0

// reset the two last buttons to initial values
function Reset() {
    // Reset number
    let interno = document.querySelector("#Numero");
	interno.innerHTML = 0;

    // Reset background
    body.style.backgroundColor = "violet";

}


// Agrega un boton que cambie los valores internos entre los 2 botones (click here <-> numero)
