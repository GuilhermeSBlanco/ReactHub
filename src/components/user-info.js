import React from 'react'

const UserInfo = ( { userinfo } ) => (
<div className='user-info'>
  <img src={userinfo.photo} />
  <h2 className='userName'>
    <a href={`https://github.com/${userinfo.login}`}>{userinfo.login}</a>
  </h2>

  <div className='repos-info'>
    <ul>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
 </div>
</div>
)

export default UserInfo