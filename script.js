console.log(":P");

if(window.location.href.includes('tab?=repositories')) {
    const test1 = document.querySelectorAll('.col-12');
    chrome.runTime.sendMessage({message: test1})
}


// function returnToNormal() {
//     for(let i = 1; i < test1.length; i++) {
//         test1[i].classList.add('py-4');
//     }
// }



// document.addEventListener('DOMContentLoaded', function(event) {
//     write("title", "GitHub Plugin", 0, 50);
//     document.querySelector('#help').addEventListener('click', function(e) {
//         paddingNumber = document.getElementById('paddingInput').value;
//         console.log("hi")
//     });  
// })