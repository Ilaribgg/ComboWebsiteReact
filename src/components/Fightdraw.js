import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import { Link } from 'react-router-dom';


function Fightdraw () {
const [open, setOpen] = useState(false);

const handleOpen = () => {setOpen(true); }
const handleClose = () =>{setOpen(false); } 

	return (
      <div>

        <AppBar position='static' style={{ color: '#282c34'}}>
          <Toolbar>
            <IconButton onClick={handleOpen} color='#282c34'><AppsIcon /></IconButton>
            <Typography variant='h6' color='#282c34'>Main page</Typography>

          </Toolbar>

        </AppBar>
<Drawer anchor ='left' open={open} onClick={handleClose}>
		  <List component='nav'>
		  	<ListItem button onClick={handleClose} component={Link} to='/'>
		 	 <ListItemIcon><HomeIcon/></ListItemIcon>
			<ListItemText>Main page</ListItemText>
		  </ListItem>

		  <ListItem button onClick={handleClose} component={Link} to='/twitter'>
		 	 <ListItemIcon><TwitterIcon/></ListItemIcon>
			<ListItemText>Twitter feed</ListItemText>
		  </ListItem>

		  	<ListItem button onClick={handleClose} component={Link} to='/twitch'>
		 	 <ListItemIcon><ViewStreamIcon/></ListItemIcon>
			<ListItemText>Twitch stream</ListItemText>
		  </ListItem>

		  		  <ListItem button  onClick={handleClose} component={Link} to='/list'>
		 	 <ListItemIcon><ListIcon/></ListItemIcon>
			<ListItemText>Combo list</ListItemText>
		  </ListItem>

		  		  <ListItem button onClick={handleClose} component={Link} to='/search'>
		 	 <ListItemIcon><SearchIcon/></ListItemIcon>
			<ListItemText>Search</ListItemText>
		  </ListItem>


</List>
</Drawer>
      </div>

    );
}

export default Fightdraw;

