import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import PublicIcon from '@material-ui/icons/Public';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList(props) {
  const classes = useStyles();
  
  return (
    <List className={classes.root}>
      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <PublicIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.country} secondary="Country" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CalendarTodayIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.startDate} secondary="StartDate" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.endDate} secondary="EndDate" />
      </ListItem>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
       <Button><a href = {props.link1} style = {{color:"white"}} target = "_blank">link1</a></Button>
       <Button><a href = {props.link2} style = {{color:"white"}} target = "_blank">link2</a></Button>
     </ButtonGroup>
    </List>
  );
}
