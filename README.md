# Browser Key Logger - Chrome Extension

This Chrome extension logs key presses from users on any webpage and stores them locally. The extension automatically submits the logs when a set word count is reached. It also includes features to toggle the color of a UI box and trigger button events.

## Features

1. **Key Logging:**
   - Logs every key press excluding system keys like `CapsLock`, `Shift`, `Control`, etc.
   - Replaces `Backspace` with the 🎃 emoji and handles `Enter` as a newline.
   - Automatically submits the log when the word count exceeds 5.

2. **UI Interaction:**
   - Color box that toggles between red and green.
   - Button A triggers Button B, which changes the color of the box.

3. **Storage and Submission:**
   - Logs are stored in Chrome's local storage.
   - Logs are auto-submitted after reaching a word count of 5.
   - Option to clear the logs.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/SimpleCyber/Key-Logger.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** by toggling the switch on the top-right.

4. Click on **Load unpacked** and select the directory where you cloned this repository.

5. The extension should now be visible and ready to use!

## How to Use

1. Install the extension following the steps above.
2. The extension will start logging key presses across open tabs.
3. The log will automatically submit after 5 words or can be cleared manually by interacting with the extension.
4. Watch the color box in the popup and interact with Button A and Button B to see the toggle functionality.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

GitHub Repository: [Browser Key Logger](https://github.com/SimpleCyber/Key-Logger)
