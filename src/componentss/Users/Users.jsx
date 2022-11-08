import React from 'react'
import axios from 'axios'
import {Routes, Route, Link} from 'react-router-dom'

import "./main.scss"
export default function Users({userName ,img, users}) {

    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        async function getUserInfo(){
           let users = await axios.get(`https://api.github.com/users/${userName }`)
           setUser(users.data)
           console.log(users)
         }
         getUserInfo()
     },[userName])



  return (
    <div className="container">
      <div className="users">
    <div className="profiles"><div className="sidebar">
                <div className="profile__img">
                <img src={user.avatar_url || img} alt="" />
                </div>
                <div className="profile_text">
                <a href={user.html_url} target="_blank">{user.login || users}</a>
                    <button className='btn edit-btn'>Edit Profile</button>
                </div>
                <div className="profile__following ">
                <i class="fa-regular fa-user"></i>
                {user.followers}Follower - {user.following} Following
               <div className="city mt-2">
               <i class="fa-solid fa-city"></i>{user.company || users}
               </div>
               <div className="lok mt-2">
               <i class="fa-regular fa-location-dot"></i> {user.location}
               </div><div className="twit mt-2">
               <i class="fa-brands fa-twitter"></i> @{user.twitter_username}               </div>
                </div>
            </div>
        
    </div>
    </div>
    <div className="repositor">
  
    </div>
</div>
  )
}
