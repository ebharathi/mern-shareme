import React from 'react'
//searchBar
import SearchBar from 'material-ui-search-bar';

const Navbar = () => {
      const openNav=()=>{
            document.querySelector('.sidenav').style.width="250px";
      }
      const closeNav=()=>{
            document.querySelector('.sidenav').style.width="0px";

      }
  return (
      <nav className='navbar navbar-expand-lg bg-light navbar-light'>
            <a href="#" className="navbar-brand mx-3 " style={{border:'none',fontWeight:'bolder'}}><i className="fas fa-2x fa-share-alt-square" style={{color:'red'}}></i>
              <span className='heading'>
                  <span style={{color:'#151617'}}>𝚂𝙷𝙰𝚁𝙴</span>
                  <span style={{color:'#55585c'}}>𝙼𝙴</span>
              </span>
             </a>
             <SearchBar className='searchBar' style={{border:''}} />
            
            <div className='sidebar mx-3'>
                  <span style={{fontSize:30,cursor:'pointer',color:'black'}} onClick={openNav}>&#9776;</span>
                  <div className="sidenav">
                        <a href="#" className='closebtn' onClick={closeNav}>&times;</a>
                        <br />
                        <a href="/about">About</a>
                        
                  </div>
            </div>
      </nav>
      )
}

export default Navbar