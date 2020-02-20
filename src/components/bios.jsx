import React from 'react'

export default class Bios  extends React.Component{
	constructor(props){
		super(props)
		this.inputRef=React.createRef()
		this.gotValue=this.gotValue.bind(this)
	}
	componentDidMount(){
		this.inputRef.current.select()
	}
	gotValue(e){
		e.preventDefault()
		if(this.inputRef.current.value==='Yes' || this.inputRef.current.value === 'yes'|| this.inputRef.current.value==='Y' || this.inputRef.current.value==='y')
		this.props.biosCb('Yes')
		else{
			this.props.biosCb('No')
		}
	}
	render(){
		return(
			<div className="bios" onClick={()=>this.inputRef.current.select()}>
				<p className="text-center bios_heading pt-3 mb-5">WINDOWS XP BIOS SETUP UTILITY</p>
				<div  className="text-left ml-3">
					<h5>Do You Want to try SOME cool features</h5>
					<h5>&bull; Yes ( Enter Y ) </h5>
					<h5>&bull; No ( Enter N )</h5>
					<h6>Enter below and hit Enter</h6>
					<form  onSubmit={this.gotValue}>
						<input type="text" className="bios_input" ref={this.inputRef}/>
					</form>
				</div>
			</div>
			)
	}
}