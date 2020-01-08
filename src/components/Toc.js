import React, {Component} from 'react';

class Toc extends Component{
  render(){
    var lists = [];
    var data = this.props.data;
    var i =0;
    while(i < data.length){
      lists.push(
                  <li key={data[i].id}>
                    <a  href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){
                          //console.log('id : '+id+'\n num : '+ num + '\n e : '+ e);
                          //e.target.dataset.id
                          //target은 태그명, dataset은 data- 속성일때 접근 가능
                          //data-의 id는 이름 다른 것으로 바꾸면 그 이름으로 된다
                          e.preventDefault();
                          this.props.onChangePage(e.target.dataset.id);
                        }.bind(this,)}
                      >{data[i].title}
                    </a>
                  </li>
                );
      i = i+1;
    }
    return(
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    );
  }
}

export default Toc;
