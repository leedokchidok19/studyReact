import React, {Component} from 'react';
import "./Romdal.css";
import romdal_img from "./RomDal.jpg";

class Romdal extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="romdal">
        <h1 onClick={function(e){
          var see = document.getElementsByClassName("romdal-desc hidden-box");
          see[0].style.display = "block";
          }.bind(this)}
          >RomDal
        </h1>
        <div className="romdal-desc hidden-box">
          <a href="https://github.com/leedokchidok19">
            <img onClick={function(e){
              e.target.style.display = "none";
            }.bind(this)}
            src={romdal_img} title="Move to GitHub" alt="clickMe" target="_blank"/>
            <div>If you're curious about me, please click. thank</div>
          </a>
        </div>

      </div>
    );
  }
}

export default Romdal;
