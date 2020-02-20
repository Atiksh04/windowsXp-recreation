import React from 'react'
import img1 from '../images/logo1.png'
import test from '../images/test.jpg'
export default class LogOff extends React.Component{
 	close=()=>{
		this.props.mycomputerClose(true)
	}
	render(){
		return(
			<div className="startup">

				<div className="startup_header"></div>
				<hr className="hr_header"/>
				<div className="startup_middle row">
					<div className="col-lg-9 text-right pt-5">
					<img className="mt-5 pt-5" src={img1} alt="logo" height="180px"/>
					<p className="logOff_text mt-2">You have Been Logged Out </p>
					</div>
					<div className="col-lg-3 bg m-auto">
						<button className="btn logOff_button " onClick={this.close}>Back to Desktop</button>
					</div>
				</div>
				<hr className="hr_footer"/>
				<div className="startup_footer"></div>
			</div>
			)
	}
}