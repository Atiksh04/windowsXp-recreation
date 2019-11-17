import React from 'react'
import TaskBar from './taskbar'
import * as handTrack from 'handtrackjs';
import img from '../images/des_back.jpg'
export default class Desktop extends React.Component{
	componentDidMount(){
		console.log('model loading started')
		handTrack.load().then(model => {
  			console.log("model loaded")
 			  
  
 		});
	}
	render(){
		return(
			<div className="desktop">
				<TaskBar/>
			</div>
			)
	}
}