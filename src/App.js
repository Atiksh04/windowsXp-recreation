import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootPage from './components/boot'
import Startup from './components/startup'
import * as handTrack from 'handtrackjs';
import Desktop from './components/desktop'
class App extends React.Component{
  constructor(props){
  	super(props)
  	this.state={
  		boot:true
  	}
  }
 
  render(){
  return (
    <div className="App">
    	 
    	<Desktop/>
    	
    </div>
  );
}
}

export default App;
