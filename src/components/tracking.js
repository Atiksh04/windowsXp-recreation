import React from 'react'

export default class Tracking extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.log('props',this.props.posenet)
		console.log(this.props.posenet)
	}
	render(){
		return(
				<div className="tracking">
				</div>
			)
	}
}