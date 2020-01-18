import React, {Component} from 'react';
import Romdal from "./romdal/Romdal";
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
import Alarm from "./alarm/AlarmMain";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state = {
      mode:'welcome',
      selected_content_id:1,
      subject:{title:"WEB", sub:"World Wide Web!"},
      welcome:{title:'welcome',desc:'Hello, React!!'},
      contents :[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }//constructor
  getReadContent(){
    var i = 0;
    while(i<this.state.contents.length){
      var data = this.state.contents[i];
      console.log(data+"data 는?");
      debugger;
      if(data.id === this.state.selected_content_id){
        return data
        break;
      }
      i = i + 1;
    }
  }
  getContent(){
    var _title, _desc, _artcle = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _artcle = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if (this.state.mode === 'read') {
//      var i = 0;
//      while(i<this.state.contents.length){
//        var data = this.state.contents[i];
//        if(data.id === this.state.selected_content_id){
//          _title = data.title;
//          _desc = data.desc;
//          break;
//        }
//        i = i + 1;
//      }
      var _content = this.getReadContent();
      _artcle = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }else if (this.state.mode === 'create') {
      _artcle = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        //this.state.contents.push(
        //  {id:this.max_content_id, title:_title, desc:_desc}
        //);
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents:_contents,//this.state.contents
          mode:'read',
          selected_content_id:this.max_content_id
        })
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }else if (this.state.mode === 'update') {
      var _content = this.getReadContent();
      _artcle = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
        //  this.max_content_id = this.max_content_id + 1;
          var _contents = Array.from(this.state.contents);//배열이나 객체 수정할 때는 복제한 후 복제한 것을 수정한다
        //  var _contents = this.state.contents.concat({
        //    id:this.max_content_id, title:_title, desc:_desc
        //  })
          var i =0;
          while(i< _contents.length){
            if(_contents[i].id === _id){
              _contents[i] = {id:_id, title:_title, desc:_desc}
              break;
            }
            i = i +1;
          }//while
          this.setState({
            contents:_contents,
            mode:'read'
          })
  //        console.log(_title, _desc);
        }.bind(this)}></UpdateContent>
    }
    return _artcle;
  }//getContent
  render(){

    return (
      <div className="App">
          <Romdal />
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
                  if(_mode ==='delete'){
                    if( window.confirm('really?') ){
                      var _contents = Array.from(this.state.contents);
                      var i =0;
                      while(i< _contents.length){
                        if(_contents[i].id === this.state.selected_content_id){
                          console.log(_contents[i].id, this.state.selected_content_id);
                          _contents.splice(i, 1);
                          break;
                        }
                        i = i +1;
                      }
                      this.setState({
                        mode:'welcome',
                        contents:_contents
                      });
                      alert('deleted!');
                    }
                  }else{
                      this.setState({
                        mode:_mode
                      })
                  }
          }.bind(this)}></Control>
          {this.getContent()} {/*{_artcle}과 동일*/}
      </div>
    );
  }
}

export default App;
