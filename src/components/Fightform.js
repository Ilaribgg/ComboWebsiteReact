import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import BackspaceIcon from '@material-ui/icons/Backspace';







function Fightform () {


// tilamuuttujat ja niiden muuttamiskutsu
  const [formi, setValues] = useState({
      character: '',
      combo: '',
      starter: ''

  });

  const muuta = (e) => {
      setValues(
        {
          ...formi,
          [e.target.name]: e.target.value
        }
      )
   };

   const muutaSuurella = (e) => {
          setValues(
        {
          ...formi,
          [e.target.name]: e.target.value.toUpperCase()
        }
      )
    };

   const muutaKuva = (e) => {
      setValues(
{
  
  ...formi,
  [e.target.name]: e.target.files[0]
}
      );
   }

   const muutaPaiva = date => {
    setValues(
{
  ...formi,
  paiva: date

}
    );
   };

  const lisaaCombo = (e) => {
    e.preventDefault();

  }

  const tyhjenna = (e) => {
    e.preventDefault();
    setValues (
{
  
    
      character: '',
      combo: '',
      starter: ''

  
}
    )

  }


  return (
    <div>

    <h3>{"Search for a combo my dude!"}</h3>
    <form style = {{maxWidth:400}}>

      <TextField label='Character' name='character' id='character' value={formi.character}
      margin='normal'required fullWidth onChange={e =>muutaSuurella(e) } />



      <TextField label='Combo' name='combo' id='combo' value={formi.combo}
      margin='normal'required fullWidth onChange={e =>muutaSuurella(e) }  />

      <TextField label='Starter' name='starter' id='starter' value={formi.starter}
      margin='normal'required fullWidth onChange={e =>muutaSuurella(e) }  />

 

    

    <Button variant='contained'color='primary' onClick={ e => lisaaCombo(e)} style={{ color: '#282c34'}}><SearchIcon/>Search</Button>
    <Button variant='contained' color='secondary' onClick={ e => tyhjenna(e) } style={{ color: '#282c34'}}><ClearIcon/>Reset</Button>
    </form>
    </div>
  );
}

export default Fightform;
