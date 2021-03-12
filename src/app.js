'use strict'

import React, { Component } from 'react'
import Search from './components/search.js'
import UserInfo from './components/user-info.js'
import Actions from './components/actions.js'
import Repos from './components/repos.js'

class App extends Component{

  render () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repos 
          className="repos" 
          title="Repositórios" 
          repos={[
            { link: 'http://repositorio', name: 'gitClone' },
            { link: 'http://repositorio', name: 'gitClone' },
            { link: 'http://repositorio', name: 'gitClone' },
          ]} 
        />

        <Repos 
          className="starred" 
          title="Favoritos" 
          repos={[
            {link: 'http://repositorio', name:'Gitclone'},
            {link: 'http://repositorio', name:'Gitclone'},
            {link: 'http://repositorio', name:'Gitclone'}
          ]}
        />

      </div>
    )
    
  }

}

export default App