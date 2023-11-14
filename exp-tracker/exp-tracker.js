// Add event listener to Filter select once loading is finished
window.addEventListener("load", function () {
	let filterSelect = document.getElementById("filterSelect");
	filterSelect.addEventListener("change", filterExpenses);
});

//declarar una funcion para el boton addExpense
function addExpense() {
	// Get user input from form and clear input.
	let expense = getUserInput();
	clearInput();

	//Crear el list element y agregarlo a la UL
	createListElement(expense);

	// Actualizar total y subtotal expenses
	updateExpenseAmount(expense.amount, expense.category);

	filterExpenses();
}

function removeButton() {
	var amount = this.previousElementSibling.innerText;
	var category = this.parentElement.className;
	console.log(category);
	updateExpenseAmount(-amount, category);
	this.parentElement.remove();
}

function filterExpenses() {
	let categories = ["Transportation", "Food", "Entertainment"];
	//esta es la funcion que corre el event listener
	let selectCategory = filterSelect.value; //declaro una variable y le asigno el valor seleccionado en el dropdown

	document.getElementById("subtotal").style.display = "none";

	// haces un foreach de categories que le de displaynone a cada item en el array

	categories.forEach((cat) => {
		document.getElementById(`subtotal-${cat}`).style.display = "none";
	});

	if (categories.includes(selectCategory)) {
		document.getElementById("subtotal").style.display = "block";
		document.getElementById(`subtotal-${selectCategory}`).style.display =
			"block";
	}

	let expensesItems = document.querySelectorAll("#expensesList li"); //selecciona todas las listas dentro de la ul

	expensesItems.forEach((item) => {
		if (item.className == selectCategory || selectCategory == "All") {
			item.style.display = "";
		} else {
			item.style.display = "none";
		}
	});
}

function getUserInput() {
	let expense = {
		description: document.querySelector("#description").value,
		amount: document.querySelector("#amount").value,
		category: document.getElementById("categoryList").value,
	};

	return expense;
}

function clearInput() {
	document.querySelector("#description").value = "";
	document.querySelector("#amount").value = "";
	document.getElementById("categoryList").value = "";
}

function createListElement(expense) {
	let li = document.createElement("li");
	li.innerHTML = `${expense.description}: $<span class="price">${expense.amount}</span> - ${expense.category}`;
	li.className = expense.category;

	// Add removal button to each list item
	let removalButton = document.createElement("button");
	removalButton.textContent = "Remove";
	removalButton.class = "removalButton";
	removalButton.onclick = removeButton;
	li.appendChild(removalButton);

	let ul = document.getElementById("expensesList");
	ul.appendChild(li);
}

function updateExpenseAmount(amount, category) {
	// Calculate total expenses and then add expense to its specific category
	let totalExpenses = document.getElementById("totalExpenses");
	totalExpenses.innerHTML = Number(totalExpenses.innerHTML) + +amount;

	let subtotal = document.getElementById(`subtotal-${category}`);
	subtotal.innerHTML = Number(subtotal.innerHTML) + +amount;
}
