import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../App.css';
class Videoplayer extends Component {

  render () {


    return ( 
    	<div>
    	<h3>{"Basics of Dragonball FighterZ!"}</h3>


    	<ReactPlayer url='https://www.youtube.com/watch?v=0vqsDzpW1LI' playing />

    </div>
    )
  }
}
export default Videoplayer;