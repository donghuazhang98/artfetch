import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuButton from "./components/MenuButton";
import PersonButton from "./components/PersonButton";
import SearchBar from "./components/SearchBar";
import Icon1 from "./components/img/Icon1.png";

export default class TopLine extends Component {
  render() {
    return (
      <div className="TopLine" style={{width: '100%', }}>
        <div className="Menu" style={{float:'left', width:'5%', display:'block'}}>
          <MenuButton/>
        </div>
        <div className="Icon" style={{float:'left', width:'5%', display:'block'}}>
          <img src={Icon1} width={'100%'}/>
        </div>
        <div className="Search" style={{ float:'left', width: '85%'} }>
          <SearchBar/>
        </div>
        <div className="Person" style={{ float:'right', width: '5%'}}>
          {/* <MenuButton/> */}
          <PersonButton/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TopLine />, document.getElementById("root"));
