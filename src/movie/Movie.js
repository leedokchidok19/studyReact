import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
  render(){
    console.log("dd");
    const movies = [
      "this?"
    ]
    return(
      <div>
        <MoviePoster />
      </div>
    );
  }
}
class MoviePoster extends Component{
  render(){
    return(
      <div>이미지 안 돼</div>

    );
  }
}

export default Movie;
