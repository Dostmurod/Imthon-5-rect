import React from 'react'
import './search.scss';
import Search from './componentss/SearchResults/Search';
import {Routes, Route, Link} from 'react-router-dom'
import Repos from './componentss/Repos/Repos';
import axios from 'axios'
import Users from './componentss/Users/Users';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const searchRef = React.useRef(null)

  const [value, setValue] = React.useState('Dostmurod')
  const [enterValue, setEnterValue] = React.useState('')


  function getSearchValue(e){
    setEnterValue('search')
      if(e.code === "Enter"){
     
        setValue(searchRef.current.value)
     
        
      }
   
     
  }


  return (
    <>
        <div className="App">
            <Link to={"/"}    >
            <div className="inputControl">
            <input 
              ref={searchRef}
              type="search" 
              className='search form-control' 
              onKeyDown={(e) => getSearchValue(e)}
              placeholder="Search to Users" 
              />
              
            </div>
            </Link>
            
    
      </div>
      <Routes>
      <Route path="/" element={<Users userName={value} />} />
          <Route path="/search" element={<Search userName = {value}/>}/>
      
      </Routes>
      
      <Repos userName = {value}/>
      

    </>
  );
}

export default App;

