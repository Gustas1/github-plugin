function changePad(pad) {
    console.log("calle")
    for(let i = 1; i < test1.length; i++) {
        test1[i].classList.remove('py-4');
        test1[i].style.paddingTop = pad + "rem";
        test1[i].style.paddingBottom = pad + "rem";
    }
}

chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    my_tabid=tabs[0].id;
  });

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("meesage recieved", message)

        console.log("clicked")

        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files: ["script.js"]
        })   

        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            func: changePad(),
            args: [message]
        })
});

