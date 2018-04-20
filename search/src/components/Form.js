import React , {Component} from 'react';

class Form extends Component{
	render(){
		return(

			<div> 
				<form onSubmit={(e)=>{this.props.sumit(e)}}> 
					<input 
					placeholder="this is it"
					value={this.props.value}
					onChange={(e)=>{this.props.change(e)}}/>
					<button> works</button>
				</form >
			</div>

			)
	}
}


export default Form ;