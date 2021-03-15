import React from 'react'
import Search from './search.js'
import UserInfo from './user-info.js'
import Actions from './actions.js'
import Repos from './repos.js'

const AppContent = () => (
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

export default AppContent

