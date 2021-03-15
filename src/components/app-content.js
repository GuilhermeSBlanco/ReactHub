import React from 'react'
import Search from './search.js'
import UserInfo from './user-info.js'
import Actions from './actions.js'
import Repos from './repos.js'
import PropTypes from 'prop-types'

const AppContent = ( { userinfo, repos, starred } ) => (
    <div className='app'>
        <Search />
        {userinfo && <UserInfo userinfo={userinfo}/>}
        {userinfo && <Actions />}

        {!!repos.length && <Repos 
          className="repos" 
          title="Repositórios" 
          repos={[
            { link: 'http://repositorio', name: 'gitClone' },
            { link: 'http://repositorio', name: 'gitClone' },
            { link: 'http://repositorio', name: 'gitClone' },
          ]} 
        />}

        {!!starred.length && <Repos 
          className="starred" 
          title="Favoritos" 
          repos={[
            {link: 'http://repositorio', name:'Gitclone'},
            {link: 'http://repositorio', name:'Gitclone'},
            {link: 'http://repositorio', name:'Gitclone'}
          ]}
        />}
      </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent

