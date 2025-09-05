console.log('external file')


// option 2 to control events
function green() {
    document.body.style.backgroundColor = 'green'
}

function yellow() {
    document.body.style.backgroundColor = 'yellow'
}

function red() {
    document.body.style.backgroundColor = 'red'
}

function blue() {
    document.body.style.backgroundColor = 'blue'
}

// option 3 get element by id then set onclick
const btnBlue = document.getElementById('btn-blue')
btnBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// option 4 different virsion 
const btnMakePurple = document.getElementById('btn-make-purple')
btnMakePurple.onclick = makePurle;
function makePurle() {
    document.body.style.backgroundColor = 'purple'
}