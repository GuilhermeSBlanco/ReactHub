import React from 'react'
import Search from './search.js'
import UserInfo from './user-info.js'
import Actions from './actions.js'
import Repos from './repos.js'
import PropTypes from 'prop-types'

const AppContent = ( { handleSearch, getRepos, getStarred, userinfo, repos, starred } ) => (
    <div className='app'>
        <Search handleSearch={handleSearch}/>
        {userinfo && <UserInfo userinfo={userinfo}/>}
        {userinfo && <Actions getRepos={ getRepos } getStarred={ getStarred }/>}

        {!!repos.length && <Repos 
          className="repos" 
          title="Repositórios" 
          repos={repos} 
        />}

        {!!starred.length && <Repos 
          className="starred" 
          title="Favoritos" 
          repos={starred}
        />}
      </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent

