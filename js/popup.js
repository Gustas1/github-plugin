function write(id, text, k, sp) {
    if (k < text.length) {
      document.getElementById(id).innerHTML += text.charAt(k);
      k++;
      setTimeout(write, sp, id, text, k, sp);
    }
}

function setPopupBG(bg) {
    document.getElementById('container').style.background = bg;
}

document.addEventListener('DOMContentLoaded', function(event) {
    write("title", "< GitHub Plugin >", 0, 50);

    document.querySelector('#revert').addEventListener('click', function() {
        paddingNumber = "1.25";
        chrome.storage.local.set({ key: paddingNumber });
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files: ["js/event.js"]
        });
    });

    document.getElementById('help').addEventListener('click', function() {
        paddingNumber = document.getElementById('paddingInput').value;
        chrome.storage.local.set({ key: paddingNumber })
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files: ["js/event.js"]
        });
    });

    document.getElementById('setBG').addEventListener('click', function() {
        bg = document.getElementById('bgInput').value;
        setPopupBG(bg);
    });

    document.getElementById('revert').addEventListener('click', function() {
        bg = "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(61,61,61,1) 100%), rgb(46, 52, 63)";
        setPopupBG(bg);
    });

    document.getElementById('iconSizeRevert').addEventListener('click', function() {
        num = "16px";
        chrome.storage.local.set({ iconSize: num });
    }); 

    document.getElementById('iconSizeEnter').addEventListener('click', function() {
        num = document.getElementById('iconSizeInput').value;
        chrome.storage.local.set({ iconSize: num });
    });

    let int = 0;

    chrome.storage.local.get(['int']).then((result) => {
        int1 = result.int;
        if(isNaN(int1)) {
            int1 = 0;
        }
        marginLeft = "";
        chrome.storage.local.get(['marginShape']).then((result) => {
            marginLeft = result.marginShape;
            if(int1 % 2 == 0) {
                document.getElementById('shape').style.marginLeft = "57.5px";
                document.getElementById('iconToggle').style.backgroundColor = "green";
            } else {
                document.getElementById('shape').style.marginLeft = "5px";
                document.getElementById('iconToggle').style.backgroundColor = "white";
            }
        });     
    });
     
    document.getElementById('iconToggle').addEventListener('click', function() {
        runIcon = "";
        marginLeft = "0px";
        if(int1 % 2 == 0) {
            chrome.storage.local.get(['marginShape']).then((result) => {
                marginLeft = result.marginShape;
                document.getElementById('shape').style.marginLeft = marginLeft;
                document.getElementById('iconToggle').style.backgroundColor = "white";
                chrome.storage.local.set({ marginShape : "57.5px"});
            })
            runIcon = false;
            chrome.storage.local.set({ runIcon: runIcon});
            int1++;
        } else {
            chrome.storage.local.get(['marginShape']).then((result) => {
                marginLeft = result.marginShape;
                document.getElementById('shape').style.marginLeft = marginLeft;
                document.getElementById('iconToggle').style.backgroundColor = "green";
                chrome.storage.local.set({ marginShape : "5px"});
            })
            runIcon = true;
            chrome.storage.local.set({ runIcon: runIcon});
            int1++;
        }
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files: ["js/event.js"]
        });
        chrome.storage.local.set({ int : int1});
    });
});

