import React, {Component} from 'react';

class CreateContent extends Component {
  render(){
    return (
      <article>
          <h2>create</h2>
          <form>
            <p><input type="text" name="title" placeholder="title"></input></p>
          </form>
      </article>
    );
  }
}

export default CreateContent;
