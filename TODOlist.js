console.log("works");

function addTask() {
	//declarar una variable y asignarle el valor del input
	let task = document.getElementById("enterYourTask").value;
	console.log(task);

	//declarar una variable y asignarle un list element tag (li)
	let li = document.createElement("li");
	console.log(li);

	//hacer que cada item de la lista tenga checkboxes
	let createCheckbox = document.createElement("input");
	createCheckbox.type = "checkbox";
	li.appendChild(createCheckbox);

	//agregar el valor del input en la <li> usando .createTextNode
	li.appendChild(document.createTextNode(task));

	// agregar el nuevo li al UL que tengo en el DOM, que tiene la id taskList
	let ul = document.getElementById("taskList");
	ul.appendChild(li);

	//hacer que el input se vacie cada vez que hago click en el boton
	document.getElementById("enterYourTask").value = "";
	//console.log(emptyInput);

	console.log(createCheckbox);
	//hacer que cada item de la lista tenga un boton para remover dicho task
}
