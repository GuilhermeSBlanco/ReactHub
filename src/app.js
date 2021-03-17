'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content.js'
import ajax from '@fdaciuk/ajax'

class App extends Component{

  constructor () {
    super()

    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.wich || e.keyCode
    const ENTER = 13
    const target = e.target

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(`https://api.github.com/users/${value}`)
        .then(({ name, avatar_url, login, public_repos, followers, following, html_url }) => {
          this.setState({
            userInfo: {
              username: name,
              photo: avatar_url,
              login: login,
              repos: public_repos,
              followers: followers,
              following: following,
              url: html_url
            },
            repos: [],
            starred: []
          })
          
        })
        .always(() => { this.setState({ isFetching: false }) } )
    }
  }

  getRepos (type) {
    return (e) => {
      console.log('type ', type)
      ajax().get(`https://api.github.com/users/${this.state.userInfo.login}/${type}`)
        .then((result) => {
          this.setState({[type]: result.map(repo => (
              {
                name: repo.name, 
                url: repo.html_url
              }
            ))
          })   
        })
      }  
  }

  render () {
    return <AppContent 
      userinfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
      isFetching={this.state.isFetching}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
  
}

export default App