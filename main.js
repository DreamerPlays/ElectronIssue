const {app, BrowserWindow} = require('electron')
let mainWindow
let childWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow = new BrowserWindow({parent: mainWindow, width: 400, height: 300})
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

