import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Routes from './Routes'

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <h1>Header</h1>
        </header>
        <Routes />
        <footer>
          <h3>Footer</h3>
        </footer>
      </div>
    )
  }
}

export default App
