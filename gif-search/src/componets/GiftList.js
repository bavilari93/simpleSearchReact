import React , {Component} from 'react';
import GiftItem from './GiftItem'

class GiftList extends Component{
	renderGif(data){
		return data.map((el, index) =>{
			return(
				<div 
				key={index}
				onClick ={()=>{this.props.display({index})}}>
				<GiftItem url={el}/> 
				</div>
				)
		})

	}
	render(){
		return(
			<div className="container">{this.renderGif(this.props.gifList)} </div>
			)
	}
}

export default GiftList;