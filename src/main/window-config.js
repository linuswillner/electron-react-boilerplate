module.exports = {
  global: {
    title: 'Prisräkning - Oy Tarra-Tac Ab',
    center: true,
    show: false, // Prevent window flash on boot
    webPreferences: {
      nodeIntegration: true
    }
  },
  dev: {
    webPreferences: {
      devTools: true
    }
  },
  prod: {
    webPreferences: {
      devTools: false // Disable DevTools in production
    }
  }
}
