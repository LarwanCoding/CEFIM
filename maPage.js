var age1 = document.getElementById("28ans");
var age2 = document.getElementById("38ans");
var age3 = document.getElementById("48ans");
var reset = document.getElementById("reset");
var ageCorrect = document.querySelector("#ageCorrect");

age1.addEventListener("click", function(){
	age1.textContent = "J'aimerais bien!";
	age2.style.visibility = "hidden";
	age3.style.visibility = "hidden";
});
age2.addEventListener("click", function(){
	age2.textContent = "Vous êtes physionomiste ?";
	age1.style.visibility = "hidden";
	age3.style.visibility = "hidden";
	ageCorrect.style.visibility = "visible";
});
age3.addEventListener("click", function(){
	age3.textContent = "Pas encore mais ça viendra !";
	age1.style.visibility = "hidden";
	age2.style.visibility = "hidden";
});

reset.addEventListener("click", function(){
	age1.textContent = "28 ans ?";
	age2.textContent = "38 ans ?";
	age3.textContent = "48 ans ?";
	age1.style.visibility = "visible";
	age2.style.visibility = "visible";
	age3.style.visibility = "visible";
});