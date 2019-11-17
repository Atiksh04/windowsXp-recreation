import React from 'react'
import img1 from '../images/Windows-XP-Setup-39-Boot-Screen-Please-wait1.png'
import img2 from '../images/Windows-XP-Setup-39-Boot-Screen-Please-wait2.png'

export default class boot extends React.Component{
	render(){
		return(
			<div className="boot">
				<img className="text-center im" height="450px" src={img2} alt="w"/>
				<p className="lead mt-5">LOADING....</p>
				<img className="b_left" src={img1} height="200px" alt="w"/>
			</div>
			)
	}
}