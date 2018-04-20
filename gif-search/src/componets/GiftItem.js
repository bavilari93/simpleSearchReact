import React , {Component} from 'react';

class GiftItem extends Component{
	render(){
		return(
			<div>
				<img src={this.props.url.images.downsized.url} alt=""/>
			</div>)
	}
}

export default GiftItem