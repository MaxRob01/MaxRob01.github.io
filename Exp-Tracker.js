//declarar una funcion para el boton addExpense
function addExpense() {
	//declarar un objeto y asignarle el valor de los 3 inputs
	let expense = {
		description: document.querySelector("#description").value,
		amount: document.querySelector("#amount").value,
		category: document.getElementById("categoryList").value,
	};

	//declarar una variable y asignarle un list element tag (li)

	let li = document.createElement("li");
	//console.log(li)
	//console.log(typeof li);
	li.textContent = `${expense.description}: $${expense.amount} - ${expense.category}`;

	//step 0: add a class to each li element that you create programmatically.
	//console.log(typeof li.className)
	li.className = expense.category;
	//console.log( li.className);

	//agregar una funcion que borre el contenido de los inputs
	document.querySelector("#description").value = "";
	document.querySelector("#amount").value = "";
	document.getElementById("categoryList").value = "";

	// agregar el nuevo li al UL que tengo en el DOM, que tiene la id expensesList
	let ul = document.getElementById("expensesList");
	ul.appendChild(li);

	// Calculate total expenses and then add expense to its specific category
	let totalExpenses = document.getElementById("totalExpenses");
	totalExpenses.innerHTML = Number(totalExpenses.innerHTML) + +expense.amount;
	let subtotal = document.getElementById(`subtotal-${expense.category}`);
	subtotal.innerHTML = Number(subtotal.innerHTML) + +expense.amount;

	let filterSelect = document.getElementById("filterSelect"); //declaro una variable para guardar el elemento del HTML
	filterSelect.addEventListener("change", filterExpenses); //agrego el event listener a la variable y asigno la funcion
	//console.log(filterSelect)

	filterExpenses();

	// Add removal button to each list item
	let removalButton = document.createElement("button");
	removalButton.textContent = "removal";
	removalButton.class = "removalButton";
	removalButton.onclick = removeButton;
	li.appendChild(removalButton);
}
function removeButton() {
	this.parentElement.remove();
}

function filterExpenses() {
	let categories = ["Transportation", "Food", "Entertainment"];
	//esta es la funcion que corre el event listener
	let selectCategory = filterSelect.value; //declaro una variable y le asigno el valor seleccionado en el dropdown

	document.getElementById("subtotal").style.display = "none";

	// haces un foreach de categories que le de displaynone a cada item en el array
	
categories.forEach(cat => {
		document.getElementById(`subtotal-${cat}`).style.display =
			"none";

})

	if (categories.includes(selectCategory)) {
		document.getElementById("subtotal").style.display = "block";
		document.getElementById(`subtotal-${selectCategory}`).style.display =
			"block";
	}

	//console.log(selectCategory);
	let expensesItems = document.querySelectorAll("#expensesList li"); //selecciona todas las listas dentro de la ul
	console.log(expensesItems);

	expensesItems.forEach((item) => {
		if (item.className == selectCategory || selectCategory == "All") {
			item.style.display = "";
		} else {
			item.style.display = "none";
		}
		console.log(item.className);
	});
}
