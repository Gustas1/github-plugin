// const test1 = document.querySelectorAll('.col-12');

function changePad(pad) {
    console.log("called")
   
    if(isNaN(pad)) {
        console.log("not a number");
    } else {
        
    }
}

function write(id, text, k, sp) {
    if (k < text.length) {
      document.getElementById(id).innerHTML += text.charAt(k);
      k++;
      setTimeout(write, sp, id, text, k, sp);
    }
}

// for(let i = 1; i < test1.length; i++) {
//     test1[i].classList.remove('py-4');
//     test1[i].style.paddingTop = "0.5rem";
//     test1[i].style.paddingBottom = "0.5rem";
// }

document.addEventListener('DOMContentLoaded', function(event) {
    write("title", "GitHub Plugin", 0, 50);

    document.querySelector('#help').addEventListener('click', function() {
        paddingNumber = document.getElementById('paddingInput').value;
        chrome.runtime.sendMessage({message: paddingNumber});
    });  
}) 