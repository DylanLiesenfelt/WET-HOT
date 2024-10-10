document.getElementById('start-btn').addEventListener('click', function() {
    // Example data to be written to the file
    const data = {
        key: 'value'
    };

    // Send data to the main process to save the file
    window.electronAPI.saveFile(data);

    // Handle the response after the file is saved
    window.electronAPI.onFileSaved((response) => {
        if (response.success) {
            console.log('File saved successfully at:', response.path);
            window.location.href = 'assets/pages/characterCreate.html';  // Redirect after saving
        } else {
            console.error('Failed to save file:', response.message);
        }
    });
});