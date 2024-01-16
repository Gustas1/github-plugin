let paddingNumber = 0;
document.getElementById('paddingInput').addEventListener('keyup', function() {
    paddingNumber = document.getElementById('paddingInput').value;
    changePad(paddingNumber)
});

const toggleButton = document.getElementById('toggleButton');
let togNum = 0;
function togglePad() { 
    if (togNum % 2 == 0) {
        changePad(paddingNumber);
        toggleButton.classList.toggle('btnClassActive');

    } else {
        returnToNormal();
        toggleButton.classList.toggle('btnClassActive');
    }
    togNum++;
}

const test1 = document.getElementsByClassName('col-12')

function changePad(pad) {
    for(let i = 1; i < test1.length; i++) {
        test1[i].classList.remove('py-4');
        test1[i].style.paddingTop = pad;
        test1[i].style.paddingBottom = pad;
    }
    console.log("hi")
}

function returnToNormal() {
    for(let i = 1; i < test1.length; i++) {
        test1[i].classList.add('py-4');
    }
    console.log("hi2");
}

// changePad("0.5rem");