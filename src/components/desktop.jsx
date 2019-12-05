import React from 'react'
import TaskBar from './taskbar'
import * as handTrack from 'handtrackjs';
import img from '../images/des_back.jpg'
import img1 from '../images/computer.png'
import img3 from '../images/documents.png'
import img4 from '../images/notepad.png'
import img5 from '../images/git1.png'
import MyComputer from './mycomputer.jsx'
import Notepad from './notepad.jsx'
import MyDocument from './mydocuments.jsx'

export default class Desktop extends React.Component{
	constructor(props){
		super(props)
		this.state={
			myc:false,
			myd:false,
			not:false
		}
		this.myDocuments = this.myDocuments.bind(this)
		this.MyComputer = this.MyComputer.bind(this)
		this.notepad= this.notepad.bind(this)
	}
	myDocuments(value){
			this.setState({
				myd:value
			})
		
	}
	MyComputer(value){
		this.setState({
			myc:value
		})
	}
	notepad(value){
		this.setState({
			not:value
		})
	}
	render(){
		return(
			<div className="desktop">
				<div className="row a">
					<div className="col-lg-3 col-md-3 col-xl-3">
						<div className="icon_button mt-5">
						<span onClick={()=>this.MyComputer(true)}>	<img src={img1} alt="icon"/>
							<p>My Computer</p></span>
						</div>
						<div className="icon_button mt-5">
							<span onClick={()=>this.myDocuments('true')}><img src={img3} alt="icon"/>
							<p>My Document</p></span>
						</div>
						<div className="icon_button mt-5">
							<span onClick={()=>this.notepad(true)}><img src={img4} alt="icon"/>
							<p>Notepad</p></span>
						</div>
						<div className="icon_button mt-5">
							<a href="#"><img src={img5} alt="icon" height="35px"/>
							<p className="text-white">GitRepo</p></a>
						</div>
					</div>
					<div className="col-lg-9 col-md-9 col-xl-9">
					
						{this.state.myd ? <MyDocument mydocumentClose={this.myDocuments}/> : <span></span>}
						{this.state.myc ? <MyComputer mycomputerClose={this.MyComputer}/> : <span></span>}
						{this.state.not ? <Notepad notepadClose={this.notepad}/> : <span></span>}
					</div>
				</div>
				<TaskBar handTrack={handTrack}/>
			</div>
			)
	}
}