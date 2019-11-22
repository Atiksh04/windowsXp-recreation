import React from 'react'
import img1 from '../images/Windows-XP-Setup-39-Boot-Screen-Please-wait1.png'
import img2 from '../images/Windows-XP-Setup-39-Boot-Screen-Please-wait2.png'

export default class boot extends React.Component{
	render(){
		return(
			<div className="boot">
				<img className="text-center im mb-0" height="420px" src={img2} alt="w"/>
				<div className="animation text-left">
					<span className="animation_span mr-1">a</span>
					<span className="animation_span mr-1">a</span>
				</div>
				<img className="b_left" src={img1} height="200px" alt="w"/>
			</div>
			)
	}
}