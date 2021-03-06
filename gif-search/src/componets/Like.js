import React , {Component} from 'react'
import GiftItem from './GiftItem'
class Like extends Component{
renderLike(e){
	return e.map((el, index)=>{
		return(
			<div  
			key= {index}
			onClick= {()=>{this.props.removeLiked(index)}}>
			<GiftItem url = {el}/>
			</div>

			)
	})
}
	render(){
		return(
			<div className="container">
			<h1>You Liked </h1>
			{this.renderLike(this.props.likeDisplay)}
			</div>)
	}
}

export default Like