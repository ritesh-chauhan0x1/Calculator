# Funny Calculator - Hello World Edition

A fun and interactive calculator web application that always returns "HELLO WORLD" as the result, no matter what calculation you try to perform!

## Features

- Clean and modern calculator interface
- Fully functional button inputs
- Keyboard support for easier use
- Rainbow animated "HELLO WORLD" result
- Shake animation for added fun
- Responsive design works on all devices
- Ready to deploy on GitHub Pages

## The Joke

This calculator looks and behaves like a normal calculator... until you press the equals button! No matter what numbers or operations you enter, the result will always be "HELLO WORLD" with a fun rainbow animation.

Perfect for:
- Pranking friends
- Fun coding demonstrations
- Learning about DOM manipulation
- GitHub Pages deployment practice

## How to Use

### Online (GitHub Pages)

Simply visit the deployed page and start calculating!

### Locally

1. Clone this repository
2. Open `index.html` in your web browser
3. Start "calculating"!

## Files

- `index.html` - Main HTML structure with embedded CSS
- `calculator.js` - JavaScript logic (with the funny twist!)
- `README.md` - This file

## Deployment to GitHub Pages

1. Push this code to a GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select main branch as source
5. Save and wait a few minutes
6. Your calculator will be live!

## How It Works

The calculator appears to work normally:
- You can input numbers
- You can select operations (+, -, ×, /)
- It displays your calculation

But when you press equals (=), instead of calculating the result, it:
1. Adds a shake animation
2. Displays "HELLO WORLD" in rainbow colors
3. Logs a fun message to the console

## Keyboard Controls

- `0-9` - Number input
- `+`, `-`, `*`, `/` - Operators
- `Enter` or `=` - Calculate (show HELLO WORLD)
- `Escape` or `C` - Clear
- `.` - Decimal point

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (no frameworks needed!)

## Customization

Want to change the result? Edit the `showHelloWorld()` function in `calculator.js`:

```javascript
function showHelloWorld() {
    currentDisplay = 'YOUR MESSAGE HERE';
    // ... rest of the code
}
```

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License - Feel free to use and modify for your own fun projects!

## Author

Ritesh Chauhan

---

Made with ❤️ for fun and learning!
