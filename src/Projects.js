import React, {useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Announcements from './Announcements';
import ProjectsCard from './projectsCard';
import SocialFeedCard from './socialFeedCard';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Project = () => {
  const [projectsArray,setProjectsArray] = useState([]);
  const [announcementsArray,setAnnouncementsArray] = useState([]);

  function fetchData(region){
    if(region === ""){
      fetch('https://pacific-tundra-98620.herokuapp.com/projects')
      .then((response) => {
          var data = response.json();
          var p = Promise.resolve(data);
           p.then(function(values) {
              setProjectsArray(values)
           });
      })
    }
    else{
      fetch('https://pacific-tundra-98620.herokuapp.com/projects/' + region)
      .then((response) => {
          var data = response.json();
          var p = Promise.resolve(data);
           p.then(function(values) {
             setProjectsArray(values)
           });
      })
    }
  }

  function fetctAnnouncements(){
    fetch('https://pacific-tundra-98620.herokuapp.com/announcements')
    .then((response) => {
        var data = response.json();
        var p = Promise.resolve(data);
         p.then(function(values) {
            setAnnouncementsArray(values)
         });
    })
  }

  useEffect(()=>{
    fetchData('');
    fetctAnnouncements();
  },[])

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    fetchData(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (<div class="container-fluid" style = {{paddingTop:"30px"}}>
  <div class="row">
    <div class="col-md-3" style={{textAlign:"center",marginTop:"30px"}}>
      {announcementsArray.map((info) => (
        <Announcements
          title = {info.title}
          message = {info.message}
          image = {info.image}/>
      ))}
    </div>
    <div class="col-md-6">
      <div class = "row">
        <div class = "col-lg-12" style={{textAlign:"center",paddingBottom:"20px"}}>
              <div>
                <FormControl className={classes.formControl} style={{minWidth: 250}} >
                  <InputLabel id="demo-controlled-open-select-label">Region</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    <MenuItem value={'APAC'}>APAC</MenuItem>
                    <MenuItem value={'EUROPE'}>EUROPE</MenuItem>
                    <MenuItem value={'AMERICAS'}>AMERICAS</MenuItem>
                  </Select>
                </FormControl>
              </div>

        </div>
      </div>
      <div className = "row">
        <div className = "col-lg-12 projects">
          {projectsArray.map((info) => (
            <NavLink to = {`/project-details/${info.name}/${info.country}/${info.city}`} style = {{textDecoration: "none"}}>
              <ProjectsCard
                name = {info.name}
                country = {info.country}
                startDate = {info.startDate}
                endDate = {info.endDate}
                image = {info.image}
                link1 = {info.link1}
                link2 = {info.link2}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <SocialFeedCard />
      <SocialFeedCard />
      <SocialFeedCard />
    </div>
  </div>
</div>);
}

export default Project;
