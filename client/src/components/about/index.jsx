import React from "react";

import { withRouter } from 'react-router-dom'

import "./styles.scss";

class About extends React.Component {
    directToProfile = (username) => {
        this.props.history.push(`/profile/${username}`)
    } 

    render() {
        return (
            <div className='about'>
                {/* <div className='avatar'>
                            <img className='picture' src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png' alt='404.png' />
                        </div> */}
                <div className='artist-info-text'>
                    <span className='artist-name' onClick={() => this.directToProfile(this.props.username)}>{this.props.username}</span>
                    <div className='artist-about'>About</div>
                    <div className='artist-about-info'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium.
                    </div>
                    {/* <div className='artist-email'>{this.state.email}</div> */}
                </div>
            </div>
        );
    }
}

export default withRouter(About)
