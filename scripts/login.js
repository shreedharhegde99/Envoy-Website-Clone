// window.onload = () => alert("hello world");

let loginForm = document.getElementById("loginForm");
// console.log(loginForm);

loginForm.addEventListener("submit",handleSubmit)



function handleSubmit() {
	event.preventDefault();
	// console.log("prevented default");

	let email = document.querySelector("input").value;
	if (email === "") {
		alert("Please enter email address");
	} else {
		window.location.href = "index.html";
	}
}
