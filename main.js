// main.js
// Точка входа Electron-приложения. Создаёт окно и загружает в него index.html (pcmii.html).

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'PCMii',
    webPreferences: {
      // Простой случай: нам не нужен Node.js внутри страницы,
      // это просто обычный HTML/CSS/JS сайт.
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile('index.html');

  // Раскомментируй строку ниже, если понадобится открыть DevTools для отладки:
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // На macOS принято пересоздавать окно, если кликнули по иконке в доке
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
