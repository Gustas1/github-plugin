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
        chrome.storage.local.set({ key: paddingNumber }).then(() => {
        });
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files: ["js/event.js"]
        });
    });

    document.getElementById('help').addEventListener('click', function() {
        paddingNumber = document.getElementById('paddingInput').value;
        chrome.storage.local.set({ key: paddingNumber }).then(() => {
        });
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files: ["js/event.js"]
        });
    });

    document.getElementById('setBG').addEventListener('click', function() {
        bg = document.getElementById('bgInput').value;
        setPopupBG(bg)
    })

    document.getElementById('revert').addEventListener('click', function() {
        document.getElementById('container').style.background = "rgb(2,0,36)";
    })
}) 