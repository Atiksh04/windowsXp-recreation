import React from 'react'
import img1 from '../images/logo1.png'
export default class Startup extends React.Component{
	render(){
		return(
			<div className="startup">
				<div className="startup_header"></div>
				<hr className="hr_header"/>
				<div className="startup_middle row">
					<div className="col-lg-9 text-right pt-5">
					<img className="mt-5 pt-5" src={img1} alt="logo" height="180px"/>
					</div>
					<div className="col-lg-3 bg"></div>
				</div>
				<hr className="hr_footer"/>
				<div className="startup_footer"></div>
			</div>
			)
	}
}