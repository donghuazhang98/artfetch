import React, { Component } from "react";
import PersonButton from "./personButton";
import PostButton from './postButton'
import SearchBar from "./searchBar";
import TitleIcon from './titleIcon'

import './style.scss'

export default class TopLine extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <div className="TopLine" style={{width: '100%' }}>
        <div className="Icon">
          <TitleIcon />
        </div>
        <div className="Search">
          <SearchBar />
        </div>
        <div className='rightBar'>
            <div className='Post'>
                <PostButton />
            </div>
            <div className="Person">
                {/* <MenuButton/> */}
                <PersonButton />
            </div>
        </div>
      </div>
    );
  }
}