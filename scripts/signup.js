let inputs = document.querySelectorAll("input");

let btn = document.querySelector("button");
btn.addEventListener("click", handleSignup);
function handleSignup() {
	event.preventDefault();
	let email = inputs[0].value;
	let firstName = inputs[1].value;
	let lastName = inputs[2].value;
	let contact = inputs[3].value;
	let password = inputs[4].value;

	if (
		email === "" ||
		firstName === "" ||
		lastName === "" ||
		contact === "" ||
		password === ""
	) {
		alert("All the fields are mandatory");  
	} else {
		inputs.forEach(function (el) {
			el.value = "";
		});
		window.location.href = "index.html";
	}
}
