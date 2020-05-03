import React, {Component} from 'react';
import './Alarm.css';
import l2mlogo from './l2m-logo.png';
import bellOn from './bell-on-240.png';

class AlarmMain extends Component {

//    alert(window.innerWidth); 764
//    alert(window.innerHeight);904
state = {
    killTime: ''
  }
  handleChange = (e) => {

      var killtime1 = e.target.value;
      var zenTime = e.target.id;
      zenTime = Number(killtime1)+Number(zenTime);
      var zenTime2 = String(zenTime);
      console.log(typeof zenTime2);
if(killtime1.length > 3){
  console.log(zenTime2.substring(0,2));
  console.log(zenTime2.substring(2,4));
      zenTime2 = zenTime2.substring(0,2)+"시"+zenTime2.substring(2,4)+"분"
debugger;
      this.setState({
        killTime: zenTime2
      })
}else{
  this.setState({
    killTime: killtime1
  })
}
  }
  render(){
    return (
      <div className="alram-main">
        <div className="alram-main-top-logo">
          <img className="logo" src={l2mlogo} alt="리니지2로고" />
        </div>
        <div className="alram-main-top-envent" title="보스이벤트 ON/OFF">
          <div>보스이벤트 ON/OFF</div>
          <div className="event-bottom">
            <select className="selectBox">
              <option>ON</option>
              <option>OFF</option>
            </select>
          </div>
        </div>
        <table className="alarm-main-table-list">
          <tr className="tr-top">
            <td>지역</td>
            <td>등장위치</td>
            <td>몬스터 이름</td>
            <td>레벨</td>
            <td>리스폰 시간</td>
            <td>처치 시간</td>
            <td>리스폰 시간</td>
            <td>드랍 아이템</td>
          </tr>
          <tr className="tr-value">
            <td>글루디온</td>
            <td>제르투바의 막사</td>
            <td>제르투바</td>
            <td>LV 40</td>
            <td>3시간 00분</td>
            <td><input id="300" className="alarm-main-input" type="text" value={this.state.killTime} onChange={this.handleChange } maxLength="5" placeholder="처치 시간을 입력해주세요."/></td>
            <td>
              <div>
                <input className="alarm-main-input" type="text" value={this.state.killTime} placeholder="처치시간을 입력해주세요." readOnly="readOnly"/>
                <img className="bell-onoff" src={bellOn} alt="알림설정"/>
              </div>
            </td>
            <td>종류 나열</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default AlarmMain;
