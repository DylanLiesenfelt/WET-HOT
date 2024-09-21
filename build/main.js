const { app, BrowserWindow } = require('electron');
const path = require('path'); // You need this for the path.join

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 675,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: path.join(__dirname, '../assets/images/icons/wet-hot-icon.png'), // __dirname ensures correct path
    });

    //win.removeMenu(); // Uncomment on release to remove the menu

    win.loadFile(path.join(__dirname, '../index.html')); // __dirname ensures relative path from the current file
}

app.whenReady().then(createWindow);
