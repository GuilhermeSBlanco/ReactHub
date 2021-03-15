'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content.js'

class App extends Component{

  constructor () {
    super()

    this.state = {
      userInfo: {
        username: 'Guilherme Blanco',
        repos: 12,
        followers: 188,
        following: 213
      },
      repos: [],
      starred: []
    }
  }

  render () {
    return <AppContent 
      userinfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }

}

export default App