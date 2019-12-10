import React from 'react'
import ProGallery from '../../components/profile-gallery'
import './index.scss'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { storage, database } from '../../firebase'
import TopLine from '../../components/topBar'

import { Redirect } from 'react-router-dom'

import { getUser, resetUser } from '../../redux/actions'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: []
        }
    }

    componentDidMount() {
        const userid = Cookies.get('userid')
        const { user } = this.props
        if (userid && !user._id) {
            this.props.getUser()
        }
    }

    handlerLogout = () => {
        Cookies.remove('userid') 
        this.props.resetUser()
    }

    render() {
        const userid = Cookies.get('userid')
        if (!userid) {
            return <Redirect to='/login' />
        }

        const { username, email } = this.props.user
                
        //console.log(this.props.user.username)
        //console.log(this.state.img)
        //console.log(this.props.user)
        if (username) {
            return (
                <div>
                    <TopLine />
                    <div className='artist-head'>
                        <div className='artist-info'>
                            <div className='avatar'>
                                <img className='picture' src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png' />
                            </div>
                            <div className='artist-info-text'>
                                <div className='artist-name'>{username}</div>
                                <div className='artist-email'>{email}</div>
                                <button
                                    onClick={this.handlerLogout}
                                    className='logout-button'
                                >
                                    logout
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='artist-content'>
                        <ProGallery user={this.props.user} />
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
    { getUser, resetUser }
)(Profile)