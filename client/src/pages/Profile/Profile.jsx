import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import RightSide from '../../Components/RightSide/RightSide'
import "./Profile.scss"


const Profile = () => {
  return (
    <div className="main">
      <div className="blur" style={{ top: '18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="blur" style={{ top: '2%', right: '30rem' }}></div>
      <div className="blur" style={{ top: '80%', right: '15rem' }}></div>
      <div className="blur" style={{ top: '80%', left: '0rem', color: '#e4f925' }}></div>
      <div className="Profile">
        <ProfileLeft />

        <div className="Profile-center">
          <ProfileCard  location="profilPage"/>
          <PostSide />
        </div>

        <RightSide />
      </div>
    </div>
  )
}

export default Profile;