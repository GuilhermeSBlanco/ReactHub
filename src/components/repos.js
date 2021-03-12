import React from 'react'
import PropTypes from 'prop-types'

const Repos = ( { className, title, repos } ) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {
        repos.map((repo, idx) => (
          <li key={idx}><a href={repo.link}>{repo.name}</a></li>
        ))
      }
    </ul>
  </div>
)

Repos.defaultProps = {
    className: ''
}

Repos.proptypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}

export default Repos