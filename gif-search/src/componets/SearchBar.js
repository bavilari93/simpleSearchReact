import React , {Component} from 'react';

class SearchBar extends Component{
	render(){
		return(
			<div>
			<input 
			placeholder="seach greatness"
			type="text"
			value={this.props.value}
			onChange={ e => this.props.onInputChange(e.target.value)}/>
			</div>
			)
	}
}
export default SearchBar;