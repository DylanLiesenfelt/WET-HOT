const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 675,
        webPreferences: {
            preload: path.join(__dirname, '/preload.js'),  // Use preload script for security
            nodeIntegration: false,  // Disabling nodeIntegration for security; use preload instead
            contextIsolation: true,  // Context isolation for security
            enableRemoteModule: false
        },
        icon: path.join(__dirname, '../assets/images/icons/wet-hot-icon.png'),
    });

    //win.removeMenu(); // Uncomment on release to remove the menu

    win.loadFile(path.join(__dirname, '../index.html'));
}

app.whenReady().then(createWindow);

function getCleanTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

// Handle the file creation request from the renderer process
ipcMain.on('save-file', (event, data) => {
    const timestamp = getCleanTimestamp() // ISO format is safer

    const filePath = path.join(__dirname, 'bin/save data', `${timestamp}.json`);

    // Ensure the directory exists or create it
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Write the JSON file
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('An error occurred while writing the JSON file:', err);
            event.reply('file-saved', { success: false, message: err.message });
        } else {
            console.log('JSON file has been saved successfully at:', filePath);
            event.reply('file-saved', { success: true, path: filePath });
        }
    });
});
