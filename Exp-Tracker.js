console.log("linked");
//declarar una funcion para el boton addExpense
function addExpense() {
	//declarar un objeto y asignarle el valor de los 3 inputs
	let expense = {
		description: document.querySelector("#description").value,
		amount: document.querySelector("#amount").value,
		category: document.getElementById("categoryList").value,
	};
	console.log(expense);

	//declarar una variable y asignarle un list element tag (li)
	let li = document.createElement("li");
    li.textContent = `${expense.description}: $${expense.amount} - ${expense.category}`;
    console.log(li);

	// agregar el nuevo li al UL que tengo en el DOM, que tiene la id expensesList
	let ul = document.getElementById("expensesList");
	ul.appendChild(li);
}
