import React, { useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import ListItemText from '@material-ui/core/ListItemText';


function Fightmenu() {
	const [anchorMenu, setMenuOpen] = useState(null);

	const handleMenu = (event) => {setMenuOpen(event.currentTarget);}
	const handleClose = () => {setMenuOpen(null);}

	const menu =<MenuList>
	<Menu anchorEl={anchorMenu}
	open={Boolean(anchorMenu)}
	onClose={handleClose}>

	<MenuItem onClick={handleClose}><HomeIcon/>
		<ListItemText insert primary='Main page' />
		</MenuItem>

		<MenuItem onClick={handleClose}><ListIcon/>
		<ListItemText insert primary='Combo list'/>
		</MenuItem>

		<MenuItem onClick={handleClose}><CloudQueueIcon/>
		<ListItemText insert primary='Twitch'/>
		</MenuItem>

		<MenuItem onClick={handleClose}><ListIcon/>
		<ListItemText insert primary='Search'/>
		</MenuItem>
		</Menu>
		</MenuList>
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={ handleMenu } color='inherit' ><MenuIcon /></IconButton>
            { menu }
            <Typography variant='h5' style={ {flexGrow: 1, textAlign: 'center'} }  color='inherit'></Typography>
            
          </Toolbar>
        </AppBar>

  </div>
);


}

export default Fightmenu;