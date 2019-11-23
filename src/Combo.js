import React from 'react';
import Fightform from './components/Fightform';
import Videoplayer from './components/Videoplayer';
import './App.css';
import logo from './logo.png';
import Fight from './components/Fight';
import Twitch from './components/Twitch';
import Twitter from './components/Twitter';
import Fightmenu from './components/Fightmenu';
import Fightdraw from './components/Fightdraw';
import {blue, red, orange, green, grey} from '@material-ui/core/colors/';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';


    const theme = createMuiTheme({
      palette: {
       background: {default: ' #9b9897'}, 
       primary: {main: orange[700], contrastText: 'white'},
       secondary: {main: red[700], contrastText: 'white'},
       text: {primary: grey[900], contrastText: 'white' },
       action: {active: '#282c34', hover: orange[700], selected: green[300]}
      },
      typography:{
        fontFamily: ['Raleway']
      },
      overrides:{},
      container:{  textalign: 'center', display: 'flex', flexdirection: 'column', alignitems: 'center'},
    });

    const fig = [
    { id: 1,
      character: 'SSJ Vegeta',
      combo: 'TOD',
      starter: 'Dragon punch'}
    ];

function Combo() {

  


  return (
<MuiThemeProvider theme = { theme }>
<CssBaseline/>
<BrowserRouter>
<header className="App-header">
<img src={logo} className="image" alt = "logo"/>


    <div className="container">
    <Fightdraw/>

    
    <Switch>
    <Route exact path='/' component={Videoplayer}/>
    <Route path='/search' component={Fightform}/>
    <Route path='/list' 
    render={(props)=> <Fight {...props} fight={fig}/>}/>
    <Route path='/twitch' component={Twitch}/>
    <Route path='/twitter' component={Twitter}/>

    </Switch>

  


    <footer> Placeholder </footer>
</div>

    </header>
    </BrowserRouter>
    </MuiThemeProvider>
  );
}
  

  


export default Combo;
