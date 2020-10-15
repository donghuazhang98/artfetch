import React from 'react'
import ProfileGallery from '../../components/profile-gallery'
import './index.scss'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { getUser, getUserProfile, resetUser } from '../../redux/actions'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: []
        }
    }

    componentDidMount() {
        const userid = Cookies.get('userid')
        const { user, match: { params } } = this.props
        if (userid && !user._id) {
            this.props.getUserProfile(params.username)
        }
    }

    render() {
        const userid = Cookies.get('userid')
        if (!userid) {
            return <Redirect to='/login' />
        }

        const { username, email } = this.props.user
                
        if (username) {
            return (
                <div>
                    <div className='artist-head'>
                        <div className='artist-info'>
                            <div className='avatar'>
                                <img className='picture' src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png' />
                            </div>
                            <div className='artist-info-text'>
                                <div className='artist-name'>{username}</div>
                                <div className='artist-email'>{email}</div>
                            </div>
                        </div>
                    </div>
                    <div className='artist-content'>
                        <ProfileGallery user={this.props.user} />
                    </div>
                </div>
            )
        }
        else {
            return null
        }      
    }
}

export default connect(
    state => ({ user: state.user }),
    { getUser, getUserProfile, resetUser }
)(Profile)