const { app, screen, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const defaults = require('defaults')
const { global, dev, prod } = require('./window-config')

const isDevelopment = process.env.NODE_ENV !== 'production'

// Global reference to mainWindow (Necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow () {
  const window = new BrowserWindow(defaults(global, isDevelopment ? dev : prod)) // Add dev/prod option overrides depending on environment

  if (isDevelopment) {
    // Send app to secondary display by default
    const { x, y } = screen.getAllDisplays()[0].bounds
    window.setBounds({ x, y })

    // Open devTools
    window.webContents.openDevTools()

    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }

  // Maximise window per default
  window.maximize()

  // Remove menu bar
  window.removeMenu()

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// Create main BrowserWindow when Electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})
