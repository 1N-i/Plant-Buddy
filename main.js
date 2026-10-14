require('electron-reload')(__dirname) // electron-reload
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 320,  //Set a fixed window size
    height: 420, //Set a fixed window size
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    center: true,
    frame: false, //Hides the defult title bar
    transparent: true, //App's background fully transparent
    alwaysOnTop: true, //Always stays visible on the desktop
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(createWindow);