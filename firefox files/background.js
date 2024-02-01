
browser.tabs.query({currentWindow: true, active: true}, function(tabs){
    my_tabid=tabs[0].id;
  });

browser.tabs.onUpdated.addListener(function(my_tabid, changeInfo, tab) {
    browser.scripting.executeScript({
        target: {tabId: my_tabid},
        files: ["js/event.js"]
    }) 
})

