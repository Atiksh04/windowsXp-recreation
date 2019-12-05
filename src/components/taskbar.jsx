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
		this.showExpanded = this.showExpanded.bind(this)
		this.state={
			expanded:false
		}
	}
	componentDidMount(){
		setTimeout(()=>{
			console.log('inside taskbar',this.props.handTrack)
		},10000)
	}
	showExpanded(){
		this.setState({
			expanded:!this.state.expanded
		})
	}
	render(){
	
		return(
			<div>
			<div className="taskbar row">
				<div className="col-lg-2 col-md-2">
				<button className="start_button" onClick={this.showExpanded()}>
					<img src={img4} alt="start_icon"/>
				</button>
				</div>

				<div className="col-md-9 col-lg-9">
				


				</div>

				<div className="col-md-1 col-lg-1 right_corner pl-2 ">
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