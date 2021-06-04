console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('submit successful')
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment() {
	alert('You are amazing!')
}
const img = document.querySelector('img')

img.addEventListener('mouseover', compliment)