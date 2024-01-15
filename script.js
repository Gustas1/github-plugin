function changePad(pad) {
    const test1 = document.getElementsByClassName('col-12')
    for(let i = 1; i < test1.length; i++) {
        test1[i].classList.remove('py-4');
        test1[i].style.paddingTop = pad;
        test1[i].style.paddingBottom = pad;
    }
}

// changePad("0.5rem");