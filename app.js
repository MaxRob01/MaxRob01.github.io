const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'pink', 'purple']

body.style.backgroundColor = "violet"


button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.background = color [colorIndex] 


}

function clicked() {

    let interno = document.querySelector("#Numero")
    interno.innerHTML += +interno.innerHTML +1

}

// Agrega un boton que reinicie el color de fondo y reinicie el valor a 0
function Reset() {
    
}


// Agrega un boton que cambie los valores internos entre los 2 botones (click here <-> numero)