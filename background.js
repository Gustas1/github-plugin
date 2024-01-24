
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    my_tabid=tabs[0].id;
  });

chrome.tabs.onUpdated.addListener(function(my_tabid, changeInfo, tab) {
    chrome.scripting.executeScript({
        target: {tabId: my_tabid},
        files: ["js/event.js"]
    }) 
})