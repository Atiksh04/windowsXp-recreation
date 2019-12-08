import React from 'react'
import img1 from '../images/logo1.png'
import test from '../images/test.jpg'
import * as handTrack from 'handtrackjs';
import Webcam from 'react-webcam'
import MediaCapturer from 'react-multimedia-capture'
export default class Startup extends React.Component{
	constructor(props){
		super(props)
		this.state={
			granted: false,
			rejectedReason: '',
			recording: false,
			paused: false
		}
			this.webRef = React.createRef()
			this.handleRequest = this.handleRequest.bind(this);
		this.handleGranted = this.handleGranted.bind(this);
		this.handleDenied = this.handleDenied.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.handleResume = this.handleResume.bind(this);
		this.handleStreamClose = this.handleStreamClose.bind(this);
		this.setStreamToVideo = this.setStreamToVideo.bind(this);
		this.releaseStreamFromVideo = this.releaseStreamFromVideo.bind(this);
		this.downloadVideo = this.downloadVideo.bind(this);
	}
	handtrack(){
		console.log('insied handtrack')
	handTrack.load().then(model => {
  			console.log("model loaded")
  			console.log(this.webRef)
  			setTimeout(()=>{
				model.detect(this.webRef.current).then(predictions => {
      				console.log("Predictions: ", predictions)})},5000)
	
	  })			
	}
	handleRequest() {
		console.log('Request Recording...');
	}
	handleGranted() {
		this.setState({ granted: true });
		console.log('Permission Granted!');
	}
	handleDenied(err) {
		this.setState({ rejectedReason: err.name });
		console.log('Permission Denied!', err);
	}
	handleStart(stream) {
		this.setState({
			recording: true
		});

		this.setStreamToVideo(stream);
		console.log('Recording Started.');
	}
	handleStop(blob) {
		this.setState({
			recording: false
		});

		this.releaseStreamFromVideo();

		console.log('Recording Stopped.');
		this.downloadVideo(blob);
	}
	handlePause() {
		this.releaseStreamFromVideo();

		this.setState({
			paused: true
		});
	}
	handleResume(stream) {
		this.setStreamToVideo(stream);

		this.setState({
			paused: false
		});
	}
	handleError(err) {
		console.log(err);
	}
	handleStreamClose() {
		this.setState({
			granted: false
		});
	}
	setStreamToVideo(stream) {
		console.log(this.webRef)
		let video = this.webRef.current;
		
		if(window.URL) {
			video.src = window.URL.createObjectURL(stream);
		}
		else {
			video.src = stream;
		}
		this.handtrack()
	}
	releaseStreamFromVideo() {
		this.webRef.current.src = '';
	}
	downloadVideo(blob) {
		let url = URL.createObjectURL(blob);
		let a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.target = '_blank';
		document.body.appendChild(a);

		a.click();
	}
	render(){
		const granted = this.state.granted;
		const rejectedReason = this.state.rejectedReason;
		const recording = this.state.recording;
		const paused = this.state.paused;
		return(
			<div className="startup">

			<MediaCapturer
					constraints={{ audio: true, video: true }}
					timeSlice={10}
					onRequestPermission={this.handleRequest}
					onGranted={this.handleGranted}
					onDenied={this.handleDenied}
					onStart={this.handleStart}
					onStop={this.handleStop}
					onPause={this.handlePause}
					onResume={this.handleResume}
					onError={this.handleError} 
					onStreamClosed={this.handleStreamClose}
					render={({ request, start, stop, pause, resume }) => 
					<div>
						<p>Granted: {granted.toString()}</p>
						<p>Rejected Reason: {rejectedReason}</p>
						<p>Recording: {recording.toString()}</p>
						<p>Paused: {paused.toString()}</p>

						{!granted && <button onClick={request}>Get Permission</button>}
						<button onClick={start}>Start</button>
						<button onClick={stop}>Stop</button>
						<button onClick={pause}>Pause</button>
						<button onClick={resume}>Resume</button>
						
						<p>Streaming test</p>
						<video autoPlay ref={this.webRef} width="320" height="300">
							<source/>
						</video>
					</div>
				} />



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