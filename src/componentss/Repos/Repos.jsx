import React from 'react'
import axios from 'axios'
import "./main.scss"
import {Link} from 'react-router-dom'
// import Users from "../../componentss/Users/Users"

export default function Repos({userName}) {

    const [repos, setRepos] = React.useState([]) 


    React.useEffect(() => {

        async  function getSearch() {
              let reposData = await axios.get(`https://api.github.com/users/${userName}/repos`)
              setRepos(reposData.data)
          }
        getSearch()
  
      }, [userName])

      console.log(repos);

  return (
    
  <div className="div">
     <div className='repos_wrapper'>
      {/* <Users/> */}
        {repos.map(item => {
          
            return (
                
               
                    <div key={item.id} className='repos'>
                       <div className="blocka">
                       <a target="_blank" href={item.html_url}>
                                {item.name}
                        </a>
                       </div>
                    </div>
               
                
            )
        })}
    </div>
  </div>
  )
}
