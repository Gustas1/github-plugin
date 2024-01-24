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
    const repoLines = document.querySelectorAll('.react-directory-filename-column');

    const hashmapExtensions = new Map();
    hashmapExtensions.set(1, ".c ");
    hashmapExtensions.set(2, ".js");
    hashmapExtensions.set(3, ".json");
    hashmapExtensions.set(4, ".md");
    hashmapExtensions.set(5, ".py");
    hashmapExtensions.set(6, ".html");
    hashmapExtensions.set(7, ".java");
    hashmapExtensions.set(8, ".cpp");
    hashmapExtensions.set(9, ".scss");
    hashmapExtensions.set(10, ".ts");
    hashmapExtensions.set(11, ".cs");
    hashmapExtensions.set(12, ".ejs");
    hashmapExtensions.set(13, ".tsx");
    hashmapExtensions.set(14, ".cjs");
    hashmapExtensions.set(15, "LICENSE");
    hashmapExtensions.set(16, ".git");
    hashmapExtensions.set(17, ".cpp");
    hashmapExtensions.set(18, ".jar");
    hashmapExtensions.set(19, ".prisma");
    hashmapExtensions.set(20, ".sql");
    hashmapExtensions.set(21, ".ipynb");
    hashmapExtensions.set(22, ".xml");
    hashmapExtensions.set(23, ".rb");
    hashmapExtensions.set(24, ".swift");
    hashmapExtensions.set(25, ".css");
    hashmapExtensions.set(26, ".css.map");

    const hashmapExtensions2 = new Map();
    hashmapExtensions2.set(1, "c ");
    hashmapExtensions2.set(2, "js");
    hashmapExtensions2.set(3, "json");
    hashmapExtensions2.set(4, "md");
    hashmapExtensions2.set(5, "py");
    hashmapExtensions2.set(6, "html");
    hashmapExtensions2.set(7, "java");
    hashmapExtensions2.set(8, "cpp");
    hashmapExtensions2.set(9, "scss");
    hashmapExtensions2.set(10, "ts");
    hashmapExtensions2.set(11, "cs");
    hashmapExtensions2.set(12, "ejs");
    hashmapExtensions2.set(13, "tsx");
    hashmapExtensions2.set(14, "cjs");
    hashmapExtensions2.set(15, "LICENSE");
    hashmapExtensions2.set(16, "img");
    hashmapExtensions2.set(17, "cpp");
    hashmapExtensions2.set(18, "jar");
    hashmapExtensions2.set(19, "prisma");
    hashmapExtensions2.set(20, "sql");
    hashmapExtensions2.set(21, "ipynb");
    hashmapExtensions2.set(22, "xml");
    hashmapExtensions2.set(23, "rb");
    hashmapExtensions2.set(24, "swift");
    hashmapExtensions2.set(25, "css");
    hashmapExtensions2.set(26, "css.map");
    
    for(let i = 0; i < repoLines.length; i++) {
        const img = document.createElement('img');
        img.style.height = "16px";
        img.style.width = "16px";
        for(let k = 0; k <= hashmapExtensions.size; k++) {
            if(repoLines[i].innerHTML.includes(hashmapExtensions.get(k))) {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k).slice(1, hashmapExtensions.get(k).length) + ".svg");
                img.src = imgUrl;
                const repoLinesItem = repoLines[i].getElementsByTagName('svg');
                for(let j = 0; j < repoLinesItem.length; j++) {
                    repoLinesItem[j].replaceWith(img);
                }
            }            
        }
        

        for(let l = 0; l <= hashmapExtensions2.size; l++) {
            if(repoLines[i].querySelector('a').title == hashmapExtensions2.get(l)) {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions2.get(l) + "_folder.svg");
                img.src = imgUrl;
                const repoLinesItem = repoLines[i].getElementsByTagName('svg');
                for(let j = 0; j < repoLinesItem.length; j++) {
                    repoLinesItem[j].replaceWith(img);
                }
            }
        }
    }
}

setTimeout(iconSwap, 300)
setTimeout(iconSwap, 400)
setTimeout(iconSwap, 500)

setTimeout(treeIconSwap, 300)
setInterval(treeIconSwap, 300)

function treeIconSwap() {
    
    const hashmapExtensions = new Map();
    hashmapExtensions.set(1, ".c ");
    hashmapExtensions.set(2, ".js");
    hashmapExtensions.set(3, ".json");
    hashmapExtensions.set(4, ".md");
    hashmapExtensions.set(5, ".py");
    hashmapExtensions.set(6, ".html");
    hashmapExtensions.set(7, ".java");
    hashmapExtensions.set(8, ".cpp");
    hashmapExtensions.set(9, ".scss");
    hashmapExtensions.set(10, ".ts");
    hashmapExtensions.set(11, ".cs");
    hashmapExtensions.set(12, ".ejs");
    hashmapExtensions.set(13, ".tsx");
    hashmapExtensions.set(14, ".cjs");
    hashmapExtensions.set(15, "LICENSE");
    hashmapExtensions.set(16, ".git");
    hashmapExtensions.set(17, ".cpp");
    hashmapExtensions.set(18, ".jar");
    hashmapExtensions.set(19, ".prisma");
    hashmapExtensions.set(20, ".sql");
    hashmapExtensions.set(21, ".ipynb");
    hashmapExtensions.set(22, ".xml");
    hashmapExtensions.set(23, ".rb");
    hashmapExtensions.set(24, ".swift");
    hashmapExtensions.set(25, ".css");
    hashmapExtensions.set(26, ".css.map");

    const tree = document.querySelectorAll('.PRIVATE_TreeView-item-content');
    for(let i = 0; i < tree.length; i++) {
        const img = document.createElement('img');
        img.style.height = "16px";
        img.style.width = "16px";
        for(let k = 0; k <= hashmapExtensions.size; k++) {
            const treeSpan = tree[i].getElementsByTagName('span');
            if(treeSpan[0].innerHTML.includes(hashmapExtensions.get(k))) {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k).slice(1, hashmapExtensions.get(k).length) + ".svg");
                img.src = imgUrl;
                const treeDiv = tree[i].getElementsByClassName('PRIVATE_TreeView-item-visual');
                const treeImg = treeDiv[0].getElementsByTagName('svg');
                for(let j = 0; j < treeImg.length; j++) {
                    treeImg[j].replaceWith(img);
                }
            }
        }
    }
}