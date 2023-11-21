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
	createCheckbox.classList.add("m-2");

	//agregar el valor del input en la <li> usando .createTextNode
	li.appendChild(document.createTextNode(task));

	// agregar el nuevo li al UL que tengo en el DOM, que tiene la id taskList
	let ul = document.getElementById("taskList");
	ul.appendChild(li);
	ul.classList.add("p-0");
	li.classList.add(
		"list-group-item",
		"border-0",
		"rounded",
		"m-2"
	);
	li.style.backgroundColor = "#f4f6f7";
	li.style.display = "flex";
	li.style.justifyContent = "space-between";

	//hacer que el input se vacie cada vez que hago click en el boton
	document.getElementById("enterYourTask").value = "";
	//console.log(emptyInput);

	//hacer que cada item de la lista tenga un boton para remover dicho task
	let removalButton = document.createElement("button");
	removalButton.textContent = "removal";
	removalButton.classList.add(
		"removalButton",
		"btn",
		"btn-primary",
		"bg-gradient",
		"ms-2",
		"btn-sm"
	);
	removalButton.onclick = removeButton;
	li.appendChild(removalButton);
}

function removeButton() {
	this.parentElement.remove();
}
