import React, {Component} from 'react'

class Display extends Component{
	test(data){
		return data.map((el, index)=>{
			return(
				<div key={index}>
				<h1> {el.name}</h1>
				</div>)
		})
	}
	render(){
		return(
			<div> 
			{this.test(this.props.info)}</div>
			)
	}
}

export default Display;