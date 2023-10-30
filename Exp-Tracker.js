console.log("linked");
//declarar una funcion para el boton addExpense
function addExpense() {
	//declarar una variable y asignarle el valor del input 'description'
	let expense = {
		description: document.querySelector("#description").value,
		amount: document.querySelector("#amount").value,
		category: document.getElementById('categoryList').value,
	};
	console.log(expense.description);
	//declarar una variable y asignarle el valor del input 'amount'
	//declarar una variable y asignarle el valor del input 'category'
	//declarar una variable y asignarle un list element tag (li)
}
