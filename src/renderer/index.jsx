import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

import './ui/assets/scss/index.scss'

const root = document.getElementById('app')

function render (Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
