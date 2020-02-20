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
    this.width=window.innerWidth
    console.log('width',this.width)
  }
  componentDidMount(){

  this.loadPosenet()
  }
  async loadPosenet(){
    console.log('loading posenet')
      const net = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      inputResolution: { width: 200, height: 200 },
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
    <div>
      {this.width<1100 ? 
        <div className="text-center mt-5 pt-5">
          <p className="less_width "> Windows Xp was not made to be Responsive. Switch to a Desktop </p>
        </div> : 
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
      }
  </div>
  );
}
}

export default App;
