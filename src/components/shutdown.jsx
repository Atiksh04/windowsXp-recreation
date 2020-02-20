import React from 'react'
import shutdownicon from '../images/shutdown.png'

export default class shutdown extends React.Component {
	 
	render(){
		return(
			<div>
			<div className="shutdown_dialog">
				<div className="shutdown_header"></div>
				<div className="shutdown_middle  text-center " onClick={this.shutitdown}>
					<img src={shutdownicon}/>
					<p className="shutdown_text mt-2">ShutDown</p>
				</div>
				<div className="shutdown_header"></div>
			</div>
			
			
			</div>
			)
	}
}