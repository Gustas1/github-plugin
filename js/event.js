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
    chrome.storage.local.get(['runIcon']).then((result) => {
        run = result.runIcon;
        console.log(run);
        if(run == true) {
            iconSwap(num)
            setTimeout(iconSwap, 200, num);
            setTimeout(iconSwap, 300, num);
            setTimeout(iconSwap, 400, num);
            setTimeout(iconSwap, 500, num);
            setTimeout(iconSwap, 600, num);
            setTimeout(iconSwap, 1000, num);
            // setInterval(iconSwap, 300, num);
            treeIconSwap(num);
            setTimeout(treeIconSwap, 300, num);
        }
    });
});

function iconSwap(num) {
    const repoLines = document.querySelectorAll('.react-directory-filename-column');

    const hashmapExtensions = new Map();
    hashmapExtensions.set(1, "c ");
    hashmapExtensions.set(2, "git");
    hashmapExtensions.set(3, "cpp");
    hashmapExtensions.set(4, "test");
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
    hashmapExtensions.set(17, "script");
    hashmapExtensions.set(18, "js");
    hashmapExtensions.set(19, "prisma");
    hashmapExtensions.set(20, "sql");
    hashmapExtensions.set(21, "ipynb");
    hashmapExtensions.set(22, "xml");
    hashmapExtensions.set(23, "rb");
    hashmapExtensions.set(24, "swift");
    hashmapExtensions.set(25, "json");
    hashmapExtensions.set(26, "css.map");
    hashmapExtensions.set(27, "src");
    hashmapExtensions.set(28, "jar");    
    hashmapExtensions.set(29, "public");
    hashmapExtensions.set(30, "scss");
    hashmapExtensions.set(31, "pt");
    hashmapExtensions.set(32, "bat");
    hashmapExtensions.set(33, "view");
    hashmapExtensions.set(34, "page");
    hashmapExtensions.set(35, "shader");
    hashmapExtensions.set(36, "notebook");
    hashmapExtensions.set(37, "model");
    hashmapExtensions.set(38, "template");
    hashmapExtensions.set(39, "util");
    hashmapExtensions.set(40, "md");
    hashmapExtensions.set(41, "rs");
    hashmapExtensions.set(42, "php");
    hashmapExtensions.set(43, "nim");
    hashmapExtensions.set(44, "ini");
    hashmapExtensions.set(45, "pug");
    hashmapExtensions.set(46, "go");
    hashmapExtensions.set(47, "vue");
    hashmapExtensions.set(48, "graphql");
    hashmapExtensions.set(49, "toml");
    hashmapExtensions.set(50, "compute");
    hashmapExtensions.set(51, "yml");
    hashmapExtensions.set(52, "yaml");
    hashmapExtensions.set(53, "style");
    hashmapExtensions.set(54, "mjs");
    hashmapExtensions.set(55, "app");
    hashmapExtensions.set(56, "component");
    hashmapExtensions.set(57, "gif");
    hashmapExtensions.set(58, "icns");
    hashmapExtensions.set(59, "vscode");
    hashmapExtensions.set(60, "package");
    hashmapExtensions.set(61, "github");
    hashmapExtensions.set(62, "jpeg");
    hashmapExtensions.set(63, "jpg");
    hashmapExtensions.set(64, "png");
    hashmapExtensions.set(65, "svg");
    
    for(let i = 0; i < repoLines.length; i++) {
        const img = document.createElement('img');

        img.style.height = num;
        // img.style.width = num-2;

        for(let k = 0; k <= hashmapExtensions.size; k++) {
            if(repoLines[i].querySelector('a').title.includes("." + hashmapExtensions.get(k))) {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k) + ".svg");
                if(repoLines[i].querySelector('a').title.includes('.vscode')) {
                    imgUrl = chrome.runtime.getURL("./img/vscode_folder.svg");
                }
                else if(repoLines[i].querySelector('a').title.includes('.github')) {
                    imgUrl = chrome.runtime.getURL("./img/github_folder.svg");
                }
                img.src = imgUrl;
                const repoLinesItem = repoLines[i].getElementsByTagName('svg');
                for(let j = 0; j < repoLinesItem.length; j++) {
                    repoLinesItem[j].replaceWith(img);
                }   
            }
            else if(repoLines[i].querySelector('a').title == hashmapExtensions.get(k) || repoLines[i].querySelector('a').title == hashmapExtensions.get(k) + "s") {
                imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k) + "_folder.svg");
                img.src = imgUrl;
                const repoLinesItem = repoLines[i].querySelectorAll('.icon-directory');
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



function treeIconSwap(num) {
    
    const hashmapExtensions = new Map();
    hashmapExtensions.set(1, "c ");
    hashmapExtensions.set(2, "git");
    hashmapExtensions.set(3, "cpp");
    hashmapExtensions.set(4, "test");
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
    hashmapExtensions.set(17, "script");
    hashmapExtensions.set(18, "js");
    hashmapExtensions.set(19, "prisma");
    hashmapExtensions.set(20, "sql");
    hashmapExtensions.set(21, "ipynb");
    hashmapExtensions.set(22, "xml");
    hashmapExtensions.set(23, "rb");
    hashmapExtensions.set(24, "swift");
    hashmapExtensions.set(25, "json");
    hashmapExtensions.set(26, "css.map");
    hashmapExtensions.set(27, "src");
    hashmapExtensions.set(28, "jar");    
    hashmapExtensions.set(29, "public");
    hashmapExtensions.set(30, "scss");
    hashmapExtensions.set(31, "pt");
    hashmapExtensions.set(32, "bat");
    hashmapExtensions.set(33, "view");
    hashmapExtensions.set(34, "page");
    hashmapExtensions.set(35, "shader");
    hashmapExtensions.set(36, "notebook");
    hashmapExtensions.set(37, "model");
    hashmapExtensions.set(38, "template");
    hashmapExtensions.set(39, "util");
    hashmapExtensions.set(40, "md");
    hashmapExtensions.set(41, "rs");
    hashmapExtensions.set(42, "php");
    hashmapExtensions.set(43, "nim");
    hashmapExtensions.set(44, "ini");
    hashmapExtensions.set(45, "pug");
    hashmapExtensions.set(46, "go");
    hashmapExtensions.set(47, "vue");
    hashmapExtensions.set(48, "graphql");
    hashmapExtensions.set(49, "toml");
    hashmapExtensions.set(50, "compute");
    hashmapExtensions.set(51, "yml");
    hashmapExtensions.set(52, "yaml");
    hashmapExtensions.set(53, "style");
    hashmapExtensions.set(54, "mjs");
    hashmapExtensions.set(55, "app");
    hashmapExtensions.set(56, "component");
    hashmapExtensions.set(57, "gif");
    hashmapExtensions.set(58, "icns");
    hashmapExtensions.set(59, "jpeg");
    hashmapExtensions.set(60, "jpg");
    hashmapExtensions.set(61, "png");
    hashmapExtensions.set(62, "svg");

    const tree = document.querySelectorAll('.PRIVATE_TreeView-item-content');
    if(tree.length > 0) {
        for(let i = 0; i < tree.length; i++) {

            const img = document.createElement('img');
            img.style.height = num;
            img.style.marginRight = "0px";

            for(let k = 0; k <= hashmapExtensions.size; k++) {
                const treeSpan = tree[i].getElementsByTagName('span');

                if(treeSpan[0].innerHTML.includes("." + hashmapExtensions.get(k))) {
                    console.log(treeSpan[0].innerText)
                    imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k) + ".svg");
                    if(treeSpan[0].innerText.slice(treeSpan[0].innerText.length-4, treeSpan[0].innerText.length) == ".css") {
                        imgUrl = chrome.runtime.getURL("./img/" + 'css' + ".svg");
                    }
                    else if(treeSpan[0].innerText.slice(treeSpan[0].innerText.length-8, treeSpan[0].innerText.length) == ".css.map") {
                        imgUrl = chrome.runtime.getURL("./img/" + 'css.map' + ".svg");
                    }
                    else if(treeSpan[0].innerText.slice(treeSpan[0].innerText.length-5, treeSpan[0].innerText.length) == ".json") {
                        imgUrl = chrome.runtime.getURL("./img/" + 'json' + ".svg");
                    }
                    img.src = imgUrl;
                    const treeDiv = tree[i].getElementsByClassName('PRIVATE_TreeView-item-visual');
                    for(let j = 0; j < treeDiv.length; j++) {
                        treeDiv[j].replaceWith(img);
                    }
                    break
                }   
                else if(treeSpan[0].innerHTML.includes(hashmapExtensions.get(k)) || treeSpan[0].innerHTML.includes(hashmapExtensions.get(k) + "s")) {
                    imgUrl = chrome.runtime.getURL("./img/" + hashmapExtensions.get(k) + "_folder.svg");
                    if(treeSpan[0].innerText == "script" || treeSpan[0].innerText == "scripts") {
                        imgUrl = chrome.runtime.getURL("./img/" + 'script' + "_folder.svg");
                    }
                    img.src = imgUrl;
                    const treeDiv = tree[i].getElementsByClassName('PRIVATE_TreeView-item-visual');
                    for(let j = 0; j < treeDiv.length; j++) {
                        treeDiv[j].replaceWith(img);
                    }
                }
            }
        }
    }
}

