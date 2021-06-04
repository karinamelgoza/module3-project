const color = document.querySelector('#color')
function alertColor() {
    alert('My favorite color is yellow')
}
color.addEventListener('click', alertColor)

const place = document.querySelector('#place')
function alertPlace() {
    alert('My favorite place is the beach')
}
place.addEventListener('click', alertPlace)

const ritual = document.querySelector('#ritual')
function alertRitual() {
    alert('My favorite ritual is listening to music before bed')
}
ritual.addEventListener('click', alertRitual)

const random = document.querySelector('#random')
let randomRes = ['Kabuki', 'Tacos', 'Leos']
function randomRec() {
    Math.floor(Math.random() * months.length)
}