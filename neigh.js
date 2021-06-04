const random = document.querySelector('#random')
let randomRes = ['Kabuki', 'Tacos', 'Leos']
function randomRec() {
    alert(randomRes[Math.floor(Math.random() * randomRes.length)])
}
random.addEventListener('click', randomRec)