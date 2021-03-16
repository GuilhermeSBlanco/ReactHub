import React from 'react'
import PropTypes from 'prop-types'

const Search = ( {handleSearch} ) => (
  <div className='search'>
    <input type='text' name='search'
    placeholder='Digite o nome do usuário no GitHub'
    onKeyUp={handleSearch} />
  </div>
)

Search.propType = {
  handleSearch: PropTypes.func.isRequired
}

export default Search