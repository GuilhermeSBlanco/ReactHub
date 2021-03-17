import React from 'react'
import PropTypes from 'prop-types'

const Search = ( {handleSearch, isDisabled} ) => (
  <div className='search'>
    <input type='text' name='search'
    placeholder='Digite o nome do usuário no GitHub'
    onKeyUp={handleSearch}
    disabled={isDisabled}
    />
  </div>
)

Search.propType = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search