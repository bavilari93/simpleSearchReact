import React , {Component} from 'react';

class Form extends Component{
	render(){
		return(

			<div> 
				<form onSubmit={this.props.sumit}> 
					<input 
					placeholder="this is it"
					value={this.props.value}
					onChange={(e)=>{this.props.change(e)}}/>
					<button
					onClick={this.props.fetchApi}> works</button>
				</form >
			</div>

			)
	}
}


export default Form ;