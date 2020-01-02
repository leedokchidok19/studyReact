import React, {Component} from 'react';
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"Start", sub:"신나는 리액트"},
      contents :[
        {id:1, title:'HTML', desc:'HTML is HyperText....'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }

  }
  render(){
    return (
      <div className="App">
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
          <Subject title="react" sub="wow"></Subject>
          <Toc data={this.state.contents}></Toc>
          <h1>hellow</h1>
      </div>
    );
  }
}

export default App;
