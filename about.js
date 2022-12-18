console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
alert("Form Submitted sucessfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
Element.addEventListener("mouseover",function(){alert("Have a Great Day")})