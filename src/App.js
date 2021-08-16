import React, {useState,useEffect} from 'react';
import Navbar from './Navbar';
import Navbar_2 from './Navbar-2';
import Project from './Projects';
import ProjectDetails from './projectDetails';
import NewPage from './newPage';
import Login from './Login';
import AuthContext from './authContext';
import {Route, BrowserRouter as Router, Switch,Redirect} from 'react-router-dom';
import './App.css';

function App() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (value) => {
      if(value === true){
        localStorage.setItem('isLoggedIn', '1');
      }
      setIsLoggedIn(value)
    }

    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };

    return (
      <div className="App">
        <Router>
          <Switch>
            <AuthContext.Provider
              value={{
                isLoggedIn: isLoggedIn,
              }}
            >
                <div className="" style={{position:"absolute",left:"0",right:"0"}}>
                  <div class="navbar-container gps-dashboard">
                      <Navbar onLogout={logoutHandler} />
                  </div>
                  <div class="navbar-container gps-navbar">
                      {isLoggedIn && <Navbar_2/>}
                  </div>
                  <div class="projects-part">
                    <Route path = '/main' exact>
                      {isLoggedIn && <Project />}
                      {!isLoggedIn && <Redirect to="/" />}
                    </Route>
                    <Route path = '/project-details/:name/:country/:city'>
                      {isLoggedIn && <ProjectDetails />}
                      {!isLoggedIn && <Redirect to="/" />}
                    </Route>
                    <Route path = "/newPage">
                      {isLoggedIn && <NewPage />}
                      {!isLoggedIn && <Redirect to="/" />}
                      <span style={{color:"#6a197d",position:"absolute",left:"37%",fontFamily: "'Noto Sans JP', sans-serif",fontSize:"2rem"}}>Page Under Development</span>
                    </Route>
                    <Route path = '/' exact>
                      {!isLoggedIn && <Login onLogin={loginHandler} />}
                      {isLoggedIn && <Redirect to="/main" />}
                    </Route>
                  </div>
                </div>
             </AuthContext.Provider>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
