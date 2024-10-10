const { contextBridge, ipcRenderer } = require('electron');

// Safely expose methods to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
    saveFile: (data) => ipcRenderer.send('save-file', data),
    onFileSaved: (callback) => ipcRenderer.on('file-saved', (event, response) => callback(response)),
});
console.log("Preload script is running"); // Add this to your preload.js to verify it's being loaded
