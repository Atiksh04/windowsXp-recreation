import React from 'react'
import TaskBar from './taskbar'
import * as handTrack from 'handtrackjs';
import img from '../images/des_back.jpg'
import img1 from '../images/computer.png'
import img2 from '../images/documents.png'
import img3 from '../images/ie.png'
import img4 from '../images/notepad.png'
import img5 from '../images/git1.png'
export default class Desktop extends React.Component{
	componentDidMount(){
		console.log('model loading started')
		handTrack.load().then(model => {
  			console.log("model loaded")
  			this.hand=handTrack
 			console.log('hand',this.hand)
 		});
	}
	render(){
		return(
			<div className="desktop">
				<div className="row a">
					<div className="col-lg-3 col-md-3 col-xl-3">
						<div className="icon_button mt-5">
							<img src={img1} alt="icon"/>
							<p>My Computer</p>
						</div>
						<div className="icon_button mt-5">
							<img src={img2} alt="icon"/>
							<p>My Documents</p>
						</div>
						<div className="icon_button mt-5">
							<img src={img3} alt="icon"/>
							<p>Internet Explorer</p>
						</div>
						<div className="icon_button mt-5">
							<img src={img4} alt="icon"/>
							<p>Notepad</p>
						</div>
						<div className="icon_button mt-5">
							<a href="#"><img src={img5} alt="icon" height="35px"/>
							<p className="text-white">GitRepo</p></a>
						</div>
					</div>
					<div className="col-lg-9 col-md-9 col-xl-9"></div>
				</div>
				<TaskBar handTrack={handTrack}/>
			</div>
			)
	}
}