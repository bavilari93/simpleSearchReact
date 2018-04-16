import React , {Component} from 'react';

class Search extends Component{
	render(){
		return(
				<form 
				onSubmit= {this.props.handleSubmit}>
				<input 
				type="text" 
				placeholder="search quote"
				onChange={this.props.contentChange}
				/>
				<button type="submit" value="Submit"> add quote </button>
				</form>
			)
	}
}

export default Search;