import React from 'react'
import img1 from '../images/logo1.png'
import Desktop from './desktop'
import Logoff from './logoff'
export default class Startup extends React.Component{
	constructor(props){
		super(props)
		this.state={
			tfeatures:false,
			cameraAccess:true,
			showStartup:true,
			showDesktop:false,
			logoff:false
		}
		this.videoRef=React.createRef()
		this.video=React.createRef()
		this.close=this.close.bind(this)
		this.showLog=this.showLog.bind(this)
		this.showDesktop=this.showDesktop.bind(this)
		this.detect=this.detect.bind(this)
	}
	componentDidMount(){
		if(this.props.biosVal==='Yes'){
			this.setState({tfeatures:true})
		navigator.mediaDevices
		.getUserMedia({video: {
  		  facingMode:"user"}})
		.then((stream)=>{
			this.setState({cameraAccess:true})
			this.video.current.srcObject=stream
			const draw=()=>{
			this.videoRef.current.getContext('2d').drawImage(this.video.current,0,0,200,200)
				window.webkitRequestAnimationFrame(draw)
			}
			window.webkitRequestAnimationFrame(draw)
			 this.detect()
		})
		.catch((err)=>{
			this.setState({cameraAccess:false})
			console.log('err in get USer media',err)
		})
	}
	else {
		this.setState({cameraAccess:false})
	}
	}
	async detect(){
		if(this.state.showStartup){
			const estimate=await this.props.posenet.estimateSinglePose(this.videoRef.current, {
	  		  flipHorizontal: false
			})
			//console.log('estimate left',estimate.keypoints[9].position.x)
			//console.log('estimate rigth',estimate.keypoints[10].position.x)
			if(estimate.keypoints[10].position.x<60){
				console.log('target value')
				this.showDesktop()
			}
			this.id=window.webkitRequestAnimationFrame(this.detect)
		}
		else if (this.state.showDesktop){
			console.log('else if')
			const estimate2=await this.props.posenet.estimateSinglePose(this.videoRef.current, {
	  		  flipHorizontal: false
			})
			if(estimate2.keypoints[3].position.x<20){
			 
				this.showLog()
			}
			this.id2=window.webkitRequestAnimationFrame(this.detect)
		}
		else{
			console.log('else')
			
		}
	}
	showLog(){
		this.setState({
					showDesktop:false,
					logoff:true
				})
		cancelAnimationFrame(this.id)
		cancelAnimationFrame(this.id2)
	}
	showDesktop(){
		this.setState({
			showDesktop:true,
			showStartup:false
		})
		cancelAnimationFrame(this.id)
	}
	close(value){
		console.log('logoffcb',value)
		this.setState({
			showDesktop:true,
			logoff:false
		})
	}
	render(){
		return(
			<div>
			<video ref={this.video} autoPlay className="video"/>	
				{this.state.tfeatures ? <canvas  height="200" width="200" className="video_stream" ref={this.videoRef}/> : <span></span> }
				
			{(this.state.showStartup) ? 
			<div className="startup">
				<div className="startup_header"></div>
				<hr className="hr_header"/>
				<div className="startup_middle row">
					<div className="col-lg-9 text-right pt-5">
					<img className="mt-5 pt-5" src={img1} alt="logo" height="180px"/>
					</div>
					<div className="col-lg-3 bg m-auto">
						{this.state.cameraAccess ?<div> <p className="startup_text">Your Right Hand is the key to open Windows</p><p className="startup_text_two">(Show your right hand to open Windows)</p> </div>: <button className="btn logOff_button" onClick={this.showDesktop}>Click to open Windows</button>}
					</div>
				</div>
				<hr className="hr_footer"/>
				<div className="startup_footer"></div>
			</div>
			:
			(this.state.showDesktop) ?
			<Desktop />
			:
			(this.state.logoff) ? 
			<Logoff mycomputerClose={this.close}/>
			 :
			 <span></span>
		}
			</div>
			)
			}
	
}