import React from 'react'
import computer from '../images/documents.png'
import windowsOne from '../images/windows-one.png'
import close from '../images/application-exit.png'
import leftarrow from '../images/leftarrow.png'
import rightarrow from '../images/rightarrow.png'
import upload from '../images/upload.png'
import searchtwo from '../images/searchtwo.png'
import folder from '../images/folder.png'
import noclue from '../images/noclue.png'
import upArrow from '../images/upsideArrow.png'
import sysinfo from '../images/sysyinfo.ico'
import add from '../images/add.png'
import change from '../images/change.png'
import network from '../images/network.png'
import md from '../images/md.png'
import sd from '../images/sd.png' 
import folder2 from '../images/folder2.png'
import cdDrive from '../images/cd-drive.png'
import localdisk from '../images/localdisk.png'
import pictures from '../images/pictures.png'
import music from '../images/music.png'
export default class MyDocument extends React.Component{
	
	closeDialog=()=>{
		this.props.mydocumentClose(false)
	}
	render(){
		return(
			<div className="mycomputer">
				<div className="mycomputer_header text-left">
					<img src={computer} alt="icon" height="18px" className="mr-2 ml-2"/>
					<span className="font-weight-bold">My Documents</span>
					<span className="header_button">
						<button className="minimize"></button>
						<button className="maximize"></button>
						<button className="close" onClick={this.closeDialog}><img src={close} height="27px" alt="close_button"/></button>
					</span>
				</div>
				<div className="dialog_after_header mr-1 ml-1">
					<div className="text-left">
							<span className="dialog_after_header_textButtons">File</span>
							<span className="dialog_after_header_textButtons">Edit</span>
							<span className="dialog_after_header_textButtons">View</span>
							<span className="dialog_after_header_textButtons">Favorites</span>
							<span className="dialog_after_header_textButtons">Tool</span>
							<span className="dialog_after_header_textButtons">Help</span>
							<img src={windowsOne} alt="icon" className="image"/>
					</div>
					<hr className="sperator mt-0 mb-0"/>
					<div className="text-left mt-1 pt-0 ">
						<span><img src={leftarrow} alt="icon" className="ml-0" />Back</span>
						<span><img src={rightarrow} alt="icon" className="mr-1 ml-1"/></span>
						<span><img src={upload} alt="icon" className="mr-2 "/></span>
						<span><img src={folder} alt="icon" className="mr-2 "/></span>
						<span><img src={searchtwo} alt="icon" className="mr-2 "/></span>
						<span><img src={noclue} alt="icon" className="mr-2"/></span>
					</div>
					<hr className="sperator mt-1 mb-0"/>
					<div className="text-left pl-2 mt-0">
						<span>Address</span>
						<span className="white_span ml-2">
							<img src={computer} alt="icon" className="mr-1 ml-2" height="15px"/>
							My Documents
						</span>
					</div>
				</div>
				<div className="mycomputer_main row pl-1 pr-1">
					<div className="col-lg-4 col-md-4 pt-3 mycomputer_main_left">
						<div className="dialog">
							<div className="p-1 pl-3 mycomputer_main_left_header text-left">
								<span className="mr-4 font-weight-bold">System Tasks</span>
								<img className="ml-5" src={upArrow} alt="icon"/>
							</div>
							
							<div className="p-2 pl-3 text-left mycomputer_main_left_body ">
								<p className="p-0 m-0"><img src={sysinfo} alt="icon" className="mr-2"/>View System Information</p>
								<p className="p-0 m-0"><img src={add} alt="icon" className="mr-2"/>Add or remove programs</p>
								<p className="p-0 m-0"><img src={change} alt="icon" className="mr-2"/>Change a setting</p>
							</div>
						</div>
						<div className="dialog mt-4">
							<div className="p-1 pl-3 mycomputer_main_left_header text-left">
								<span className="mr-4 font-weight-bold">Other Places</span>
								<img className="ml-5" src={upArrow} alt="icon"/>
							</div>
							
							<div className="p-2 pl-3 text-left mycomputer_main_left_body ">
								<p className="p-0 m-0"><img src={network} alt="icon" className="mr-2"/>My Network Places</p>
								<p className="p-0 m-0"><img src={md} alt="icon" className="mr-2"/>My Documents</p>
								<p className="p-0 m-0"><img src={sd} alt="icon" className="mr-2"/>Shared Documents</p>
								<p className="p-0 m-0"><img src={change} alt="icon" className="mr-2"/>My Documents</p>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-md-8 mycomputer_main_right text-left ml-0">
						 
						<div className="mt-4 mb-5">
							<span className="mr-5 ">
								<img src={pictures} alt="icon" className="mr-1"/>
								My Pictures
							</span>
							<span className="ml-3">
								 <img src={folder2} alt="icon" className="mr-1"/>
								Base Images
							</span>
						</div>
						<div className="mt-5 mb-3">
							<span className="mr-5 ">
								<img src={music} alt="icon" className="mr-1"/>
								My Music
							</span>
							<span className="ml-3">
								 <a href="http://windows98-recreation.netlify.com">
								 <img src={folder2} alt="icon" className="mr-1"/>
								Windows.Old
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
			)
	}
}