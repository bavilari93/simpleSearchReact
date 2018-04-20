import React, { Component } from 'react';
import './App.css';
import SearchBar from './componets/SearchBar';
import GiftList from './componets/GiftList';
import Liked from './componets/Like'
class App extends Component {
  constructor(){
    super();
    this.state ={
      input:'', 
      gifs:[],
      selectedGif:[]
    }
  }



onInputChange(e){
this.setState({
  input: e
},()=>{ 
this.getGif();
})

}

getGif(e){
  let param= this.state.input
fetch(`http://api.giphy.com/v1/gifs/search?q=${param}&api_key=H29ylmg5zMme5R3blnv5KhrJzg4Zk6xb`, {
  method: 'GET'
}).then((response)=> 
response.json()
)
.then((data) =>
  this.setState({
    gifs: data.data
  }) 
)}

oneGif(e){
  let index = e.index

console.log(typeof index);
  let test = this.state.gifs[index]

  this.setState({
    selectedGif: this.state.selectedGif.concat([test])
  })
}




  render() {
    return (
      <div className="wrap">
      <Liked likeDisplay={this.state.selectedGif}/>
        <SearchBar 
          onInputChange={this.onInputChange.bind(this)}
          value ={this.state.input}/>
        <GiftList 
          gifList={this.state.gifs}
          display ={this.oneGif.bind(this)}/>
          
      </div>
    );
  }
}

export default App;
