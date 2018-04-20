import React, { Component } from 'react';
import $ from 'jquery'
import Form from './components/Form'
import Display from './components/Display'

class App extends Component {
  constructor(){
    super();
    this.state={
      search:'', 
      names:[]
    }
  }

    onChange(x){
      console.log(x.target.value);
      // we set the state so we can see the value on the input 
      this.setState({
        search: x.target.value
      })
    }
    handleQueryResponse(x){
      console.log(x);
      this.setState({
        names: x.results
    })
    }

    handleSubmit(x){
      x.preventDefault();
      $.ajax(
        // { url: "https://swapi.co/api/people/?search=skywalker" }
        {url: "https://swapi.co/api/people",
          data: {search: this.state.nameValue}}
        ).done((data) => {
          console.log(data.results);
              this.handleQueryResponse(data);
          });
    }


  render() {
    return (
      <div className="App">
          <Form
          value={this.state.search}
          change = {this.onChange.bind(this)}
          sumit={this.handleSubmit.bind(this)}
          />
          <Display
          info= {this.state.names}/>
      </div>
    );
  }
}

export default App;
