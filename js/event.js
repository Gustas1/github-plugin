console.log("script called")

// const imgs = document.querySelectorAll('img.avatar-user');

// THIS IS THE CODE FOR GETTING ALL IMAGES ON THE HOME PAGE, THIS CODE GETS TEH IMAGES OF THE REPOS
// THE IMAGES YOU CANT SEE ARE THE IMAGES THAT ARE SHOWN IN THE MEDIA QUERIED VERSION OF THE SITE

// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].style.height = "500px";
// }

chrome.storage.local.get(["key"]).then((result) => {
    pd = result.key;    
    if(window.location.href.includes('?tab=repositories')) {
        if(pd == null) {
            return undefined
        } else {
            changePad(pd);
        }
    }
    setTimeout(iconSwap, 200)
});

function changePad(pad) {
    const test1 = document.querySelectorAll('.col-12');
    for(let i = 1; i < test1.length; i++) {
        test1[i].classList.remove('py-4');
        test1[i].style.paddingTop = pad + "rem";
        test1[i].style.paddingBottom = pad + "rem";
    }
}

function iconSwap() {
    const test1 = document.querySelectorAll('.react-directory-filename-column');

    const hashmapExtensions = new Map();
    hashmapExtensions.set(1, ".html");
    hashmapExtensions.set(2, ".js");
    hashmapExtensions.set(3, ".json");
    hashmapExtensions.set(4, ".md");
    hashmapExtensions.set(5, ".py")
    hashmapExtensions.set(6, ".css")
    hashmapExtensions.set(7, ".java")
    hashmapExtensions.set(8, ".cpp")
    hashmapExtensions.set(9, ".scss")
    hashmapExtensions.set(10, ".tsx")

    for(let i = 0; i < test1.length; i++) {
        const img = document.createElement('img');
        img.style.height = "16px";
        img.style.width = "16px";
        for(let k = 0; k <= hashmapExtensions.size; k++) {
            if(test1[i].innerHTML.includes(hashmapExtensions.get(k))) {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k).slice(1, hashmapExtensions.get(k).length) + ".png");
                img.src = imgUrl;
                const test2 = test1[i].getElementsByTagName('svg');
                for(let j = 0; j < test2.length; j++) {
                    test2[j].replaceWith(img);
                }
            }
        }
    }
}

setTimeout(iconSwap, 300)
setTimeout(iconSwap, 400)



