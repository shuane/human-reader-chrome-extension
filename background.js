
chrome.contextMenus.create({
    "id": "readOutLoud",
    "title": "Human Reader - Start reading",
    "contexts": ["selection"],
});

// Could be adde in future
//chrome.contextMenus.create({
//    "id": "stopReading",
//    "title": "Stop reading",
//    "contexts": ["all"],
//});

// Detect click on context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    transmitSignal();
})

// Send message to content.js file
async function transmitSignal() {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "readOutLoud"});
    }
}