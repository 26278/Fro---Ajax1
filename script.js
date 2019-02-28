//bind de HTML id's
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let email = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let responseHere = document.getElementById("responseHere");
let tijdHere = document.getElementById("tijdHere");

//click event listener
submitButton.addEventListener('click', ajax);

//ajax functie
function ajax() {
	let xmlhtpp = new XMLHttpRequest();

	xmlhtpp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			responseHere.innerHTML = this.responseText; //De response van de server
		}
	}
	//de HTTP header
	let httpString = "form_1.php?firstName=" + firstName.value
	 + "&lastName=" + lastName.value
	 + "&age=" + age.value
	 + "&email=" + email.value;


	//debuggen laat de http string zien
	console.log(httpString);

	//bereid de ajax actie voor
	xmlhtpp.open("GET", httpString, true);
	xmlhtpp.send(); //voer uit
}