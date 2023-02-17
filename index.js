const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 480
    })
  
    win.loadFile('index.html')
    return win
  }

  app.whenReady().then(() => {
    let win = createWindow()
    win.setProgressBar(0.3)
  })