import React, {useContext} from 'react';
import Logo from './Logo';
import {NavLink} from 'react-router-dom';
import AuthContext from './authContext';

function Navbar(props){

    const context = useContext(AuthContext);

    return (<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
          <NavLink to = "/main" style = {{textDecoration: "none"}}><a class="navbar-brand" href="#" style={{fontFamily: "'Noto Sans JP', sans-serif",fontSize:"2.2rem"}}><Logo /><span style={{color:"#6a197d"}}>GPS Dashboard</span></a></NavLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto" style={{textAlign:"center"}}>
              <li class="nav-item active">
                <a class="nav-link" href="#"><button type="button" className="nav-button">Home</button> <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#bottom-section" ><button type="button" className="nav-button">Dashboard</button></a>
              </li>
              <li class="nav-item">
                <div class="dropdown nav-link">
                    <button class="nav-button dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-user fa-lg"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button class="dropdown-item" type="button">My Profile</button>
                      <button class="dropdown-item" type="button">My Projects</button>
                      {context.isLoggedIn && <button class="dropdown-item" type="button" onClick = {props.onLogout}>Logout</button>}
                    </div>
                 </div>
              </li>
            </ul>
          </div>
        </nav>);

}

export default Navbar;
