import React from 'react'
import img2 from '../images/icon1.png'
import img3 from '../images/cross.png'
import img1 from '../images/speaker.png'
import img4 from '../images/start.png'
import Expanded from './taskbarExpanded.jsx'

export default class TaskBar extends React.Component{
	constructor(props){
		super(props)
		this.hour= new Date().getHours()
		this.min= new Date().getMinutes()
	}
	componentDidMount(){
		setTimeout(()=>{
			console.log('inside taskbar',this.props.handTrack)
		},10000)
	}

	render(){
	
		return(
			<div>
			<div className="taskbar">
				<button className="start_button">
					<img src={img4} alt="start_icon"/>
				</button>
				<div className="right_corner pl-2 ">
					<img className="mr-1" src={img1} alt="icon"/>
					<img className="mr-1" src={img2} alt="icon"/>
					<img className="mr-1" src={img3} alt="icon"/>
					<span>{this.hour}:{this.min}</span>
				</div>
			</div>
 

 	
			</div>
			)
	}
}