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
    // setTimeout(iconSwap, 200)
});

function changePad(pad) {
    const test1 = document.querySelectorAll('.col-12');
    for(let i = 1; i < test1.length; i++) {
        test1[i].classList.remove('py-4');
        test1[i].style.paddingTop = pad + "rem";
        test1[i].style.paddingBottom = pad + "rem";
    }
}

chrome.storage.local.get(['iconSize']).then((result) => {    
    num = result.iconSize;
    iconSwap(num)
    setTimeout(iconSwap, 200, num);
    setTimeout(iconSwap, 300, num);
    setTimeout(iconSwap, 400, num);
    setTimeout(iconSwap, 500, num);
})

function iconSwap(num) {
    const repoLines = document.querySelectorAll('.react-directory-filename-column');

    const hashmapExtensions = new Map();
    hashmapExtensions.set(1, "c ");
    hashmapExtensions.set(2, "git");
    hashmapExtensions.set(3, "cpp");
    hashmapExtensions.set(4, "md");
    hashmapExtensions.set(5, "py");
    hashmapExtensions.set(6, "html");
    hashmapExtensions.set(7, "java");
    hashmapExtensions.set(8, "cpp");
    hashmapExtensions.set(9, "cs");
    hashmapExtensions.set(10, "ts");
    hashmapExtensions.set(11, "css");
    hashmapExtensions.set(12, "ejs");
    hashmapExtensions.set(13, "tsx");
    hashmapExtensions.set(14, "cjs");
    hashmapExtensions.set(15, "LICENSE");
    hashmapExtensions.set(16, "img");
    hashmapExtensions.set(17, "js");
    hashmapExtensions.set(18, "json");
    hashmapExtensions.set(19, "prisma");
    hashmapExtensions.set(20, "sql");
    hashmapExtensions.set(21, "ipynb");
    hashmapExtensions.set(22, "xml");
    hashmapExtensions.set(23, "rb");
    hashmapExtensions.set(24, "swift");
    hashmapExtensions.set(25, "script");
    hashmapExtensions.set(26, "css.map");
    hashmapExtensions.set(27, "src");
    hashmapExtensions.set(28, "jar");    
    hashmapExtensions.set(29, "script ");
    hashmapExtensions.set(30, "public");
    hashmapExtensions.set(31, "scss");
    hashmapExtensions.set(32, "png");
    hashmapExtensions.set(33, "svg");
    
    for(let i = 0; i < repoLines.length; i++) {
        const img = document.createElement('img');

        img.style.height = num;
        // img.style.width = num-2;

        for(let k = 0; k <= hashmapExtensions.size; k++) {
            if(repoLines[i].querySelector('a').title.includes("." + hashmapExtensions.get(k))) {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k) + ".svg");
                img.src = imgUrl;
                const repoLinesItem = repoLines[i].getElementsByTagName('svg');
                for(let j = 0; j < repoLinesItem.length; j++) {
                    repoLinesItem[j].replaceWith(img);
                }   
            }
            else if(repoLines[i].querySelector('a').title.includes(hashmapExtensions.get(k))) {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k) + "_folder.svg");
                img.src = imgUrl;
                const repoLinesItem = repoLines[i].getElementsByClassName('icon-directory');
                for(let j = 0; j < repoLinesItem.length; j++) {
                    repoLinesItem[j].replaceWith(img);
                } 
            }

        }
    }

    const folders = document.querySelectorAll('.icon-directory');
    for(let i = 0; i < folders.length; i++) {
        const img = document.createElement('img');
        img.style.height = num;
        imgUrl = chrome.runtime.getURL("./img/folder.svg");
        img.src = imgUrl;
        folders[i].replaceWith(img);
    }
    
    const img = document.createElement('img');
    img.style.height = num;
    img.style.marginRight = "5px";
    img.src = chrome.runtime.getURL("./img/folder.svg");
    if(document.querySelector('.Octicon-sc-9kayk9-0')) {
        document.querySelector('.Octicon-sc-9kayk9-0').replaceWith(img);
    }
}

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