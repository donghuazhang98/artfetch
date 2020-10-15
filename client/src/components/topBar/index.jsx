import React from "react";
import PersonButton from "./personButton";
import PostButton from './postButton'
import SearchBar from "./searchBar";
import TitleIcon from './titleIcon'

import { withRouter } from 'react-router-dom'

import './style.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className="TopLine" style={{width: '100%' }}>
        <div className="Icon">
          <TitleIcon history={this.props.history} />
        </div>
        <div className="Search">
          <SearchBar />
        </div>
        <div className='rightBar'>
            <div className='Post'>
                <PostButton history={this.props.history} navList={this.props.navList} />
            </div>
            <div className="Person">
                <PersonButton navList={this.props.navList} user={this.props.user} logout={this.props.logout} />
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TopBar)