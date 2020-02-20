import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootPage from './components/boot'
import Startup from './components/startup'
import Bios from './components/bios'
import * as posenet from '@tensorflow-models/posenet'
import Tracking from './components/tracking'
class App extends React.Component{
  constructor(props){
  	super(props)
  	this.state={
  		boot:true,
      posenetLoading:true,
      posenet:[],
      biosVal:'',
      gotBios:false

  	}
    this.biosCallback=this.biosCallback.bind(this)
    this.loadPosenet = this.loadPosenet.bind(this)
  }
  componentDidMount(){
  this.loadPosenet()
  }
  async loadPosenet(){
    console.log('loading posenet')
      const net = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      inputResolution: { width: 300, height: 300 },
      multiplier: 0.75
    });
      console.log('posenet loaded')
    this.setState({posenetLoading:false,posenet:net})
    
  }
  biosCallback(value){
    console.log('callback of bios',value)
    this.setState({biosVal:value,gotBios:true})
  }
  render(){
  return (
    <div className="App">
      {this.state.posenetLoading ? 
        <BootPage/> 
        :
          (this.state.gotBios) ?
          <div>
            <Startup posenet={this.state.posenet} biosVal={this.state.biosVal}/> 
         
         </div>
         :
        <Bios biosCb={this.biosCallback}/>
         }  
          
      
      	
      
    </div>
  );
}
}

export default App;
