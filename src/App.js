import React, {Component} from 'react';
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";
import Alarm from "./alarm/AlarmMain";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:0,
      subject:{title:"WEB", sub:"World Wide Web!"},
      welcome:{title:'welcome',desc:'Hello, React!!'},
      contents :[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }

  }
  render(){
    var _title, _desc, _artcle = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _artcle = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if (this.state.mode === 'read') {
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _artcle = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if (this.state.mode === 'create') {
      _artcle = <CreateContent></CreateContent>
    }
    return (
      <div className="App">
          <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function(){
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}
          >
          </Subject>
          {/*<header>
            <h1><a href="/" onClick={function(e){
              //console.log(e);
              e.preventDefault();//이벤트의 기본적인 동작을 막는다(a태그의 페이지 이동을 막았다)
              //debugger;
              //this.state.mode = 'welcome';
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}>{this.state.subject.title}</a></h1>
                {this.state.subject.sub}
          </header>*/}
          <Toc
            onChangePage={function(id){
              this.setState({
                mode:'read',
                selected_content_id:Number(id)
              });
            }.bind(this)}
            data={this.state.contents}
            >
          </Toc>
          <Control
                  onChangeMode={function(_mode){
                    this.setState({
                      mode:_mode
                    })
                  }.bind(this)}
          >
          </Control>
          {_artcle}
      </div>
    );
  }
}

export default App;
