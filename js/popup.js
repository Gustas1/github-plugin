function write(id, text, k, sp) {
    if (k < text.length) {
      document.getElementById(id).innerHTML += text.charAt(k);
      k++;
      setTimeout(write, sp, id, text, k, sp);
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
    write("title", "GitHub Plugin", 0, 50);

    document.querySelector('#help').addEventListener('click', function() {
        paddingNumber = document.getElementById('paddingInput').value;
        chrome.storage.local.set({ key: paddingNumber }).then(() => {
        });
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files: ["js/event.js"]
        })
    });
}) 