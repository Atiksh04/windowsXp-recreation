import React from 'react'
import notepad from '../images/notepad.png'
import close from '../images/application-exit.png'
export default class Notepad extends React.Component{
	close=()=>{
		this.props.notepadClose(false)
	}
	render(){
		return(
			<div class="notepad">
				<div className="mycomputer_header text-left">
					<img src={notepad} alt="icon" height="18px" className="mr-2 ml-2"/>
					<span className="font-weight-bold">Untitled-Notepad</span>
					<span className="header_button">
						<button className="minimize"></button>
						<button className="maximize"></button>
						<button className="close" onClick={this.close}><img src={close} height="27px" alt="close_button"/></button>
					</span>
				</div>
				<div className="notepad_after_dialog text-left pb-1">
					<span className="dialog_after_header_textButtons">File</span>
					<span className="dialog_after_header_textButtons">Edit</span>
					<span className="dialog_after_header_textButtons">View</span>
					<span className="dialog_after_header_textButtons">Format</span>
					<span className="dialog_after_header_textButtons">Help</span>
				</div>
				<textarea row="100" cols="93" className="text-area"></textarea>
			</div>
			)
	}
}