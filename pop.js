// console.log("ok")
// chrome.browserAction.onClicked.addListener(function(tab) {

// });

chrome.tabs.executeScript(null,{file: "jquery-2.1.1.min.js"});
chrome.tabs.executeScript(null,{file: "myscript.js"});


chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    // console.log(request.data)
    $("#show").text(request.data)
    sendResponse({}); // snub them.
});
