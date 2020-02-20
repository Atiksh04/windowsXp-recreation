import React from 'react'
import user from '../images/user.png'
import ie from '../images/ie.png'
import email from '../images/email.png'
import mine from '../images/mine.png'
import notepad from '../images/notepad.png'
import winamp from '../images/winamp.png'
import paint from '../images/paint.png'
import media from '../images/media.png'
import messanger from '../images/messanger.png'
import allProgram from '../images/all-programs.ico'
import documents from '../images/documents.png'
import recent from '../images/recent.png'
import pictures from '../images/pictures.png'
import music from '../images/music.png'
import computer from '../images/computer.png'
import control from '../images/control.png'
import access from '../images/access.png'
import connect from '../images/connect.png'
import printer from '../images/printer.png'
import help from '../images/help.png'
import search from '../images/search.png'
import run from '../images/run.png'
import logoff from '../images/logooff.png'
import shutdown from '../images/shutdown.png'

import ShutDownComp from './shutdown.jsx'
export default class TaskBarExpanded extends React.Component{
	constructor(props){
		super(props)
		this.state={
			showShutdown:false
		}
		this.showShut=this.showShut.bind(this)
	}
	showShut(){
		console.log('clicked')
		this.setState({
			showShutdown:true
		})
	}
	render(){
		return(
			<div className="taskbar_expanded">
				<div className="taskbar_expanded_header text-left">
					<img src={user} alt="icon" height="50px"/>
					<span className="ml-2">User</span>
				</div>
				<hr className="hr_header"/>
				<div className="taskbar_expanded_middle row">
					<div className="col-lg-6 col-md-6 col-xl-6 taskbar_expanded_middle_left text-left pl-2">
						<div className="mt-2 ml-0  text-left pl-0">
							<img src={ie} alt="icon"/>
							<span className="ml-1">Internet Explorer</span>
						</div>
						<div className="mt-2 ml-0 text-left pl-0">
							<img src={email} alt="icon"/>
							<span className="ml-1">E-Mail</span>
						</div>
						<hr className="separator"/>
						<div className="mt-2 ml-0 text-left pl-0">
							<img src={notepad} alt="icon"/>
							<span className="ml-1">Notepad</span>
						</div>
						<div className="mt-3 ml-0 text-left pl-0">
							<img src={winamp} alt="icon"/>
							<span className="ml-1">Winamp</span>
						</div>
						<div className="mt-3 ml-0 text-left pl-0">
							<img src={paint} alt="icon"/>
							<span className="ml-1">Paint</span>
						</div>
						<div className="mt-3 ml-0 text-left pl-0">
							<img src={media} alt="icon"/>
							<span className="ml-1">Media</span>
						</div>
						<div className="mt-3 ml-0 text-left pl-0">
							<img src={messanger} alt="icon"/>
							<span className="ml-1">Messanger</span>
						</div>
						<hr className="separator mt-5 mb-1"/>
						<div className="all-program ml-0 p-1 text-center pl-0">
							<span className="mr-1">All Programs</span>
							<img src={allProgram} alt="icon"/>
						</div>					
					</div>
					<div className="col-lg-6 col-md-6 col-xl-6 pl-0 taskbar_expanded_middle_right text-left">
					<div className="ml-2 mt-2">
						<img src={documents} alt="icon" height="20px"/>
						<span className="ml-1">My Documents</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={recent} alt="icon" height="20px"/>
						<span className="ml-1">Recent Documents</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={pictures} alt="icon" height="20px"/>
						<span className="ml-1">My Pictures</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={music} alt="icon" height="20px"/>
						<span className="ml-1">My Music</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={computer} alt="icon" height="20px"/>
						<span className="ml-1">My Computer</span>
					</div>
					<hr className="separator mb-1"/>
					<div className="ml-2">
						<img src={control} alt="icon" height="25px"/>
						<span className="ml-1">Control Panel</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={access} alt="icon" height="25px"/>
						<span className="ml-1">Set Program Access</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={connect} alt="icon" height="25px"/>
						<span className="ml-1">Connect To</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={printer} alt="icon" height="25px"/>
						<span className="ml-1">Printers and Faxes</span>
					</div>
					<hr className="separator mb-1 mt-1" />
					<div className="ml-2 mt-2">
						<img src={help} alt="icon" height="25px"/>
						<span className="ml-1">Help and Support</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={search} alt="icon" height="25px"/>
						<span className="ml-1">Search</span>
					</div>
					<div className="ml-2 mt-2">
						<img src={run} alt="icon" height="30px"/>
						<span className="ml-1">Run</span>
					</div>
				</div>
				</div>
				<div className="taskbar_expanded_bottom text-right pt-1 pr-2">
				
				<span className="mr-4">
					<img src={logoff} alt="icon"/> Log Off
				</span>
				<span onClick={this.showShut}>
					<img src={shutdown} alt="icon"/> Shutdown
				</span>
				</div>
				{this.state.showShutdown ? <ShutDownComp/> : <span></span>}
			</div>
			)
	}
}