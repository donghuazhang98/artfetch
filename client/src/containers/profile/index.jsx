import React from 'react'
import ProfileGallery from '../../components/profile-gallery'
import './index.scss'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { reqUserProfile } from '../../api'
import { getUser, getUserProfile, resetUser } from '../../redux/actions'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            imgs: []
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props

        reqUserProfile(params.username).then(({ data: user }) => {
            this.setState({
                username: user.data.username,
                email: user.data.email,
                imgs: user.data.images
            })
        })
    }

    // update when url changes 
    componentDidUpdate(previousProps) {
        // compare two url username parameters
        const newUsername = this.props.match.params.username
        const oldUsername = previousProps.match.params.username

        if (oldUsername !== newUsername) {

            reqUserProfile(newUsername).then(({ data: user }) => {
                this.setState({
                    username: user.data.username,
                    email: user.data.email,
                    imgs: user.data.images
                })
            })
        }
    }

    render() {
        const userid = Cookies.get('userid')
        if (!userid) {
            return <Redirect to='/login' />
        }
                
        if (this.state.username !== '') {
            if (this.state.imgs.length) {
                return (
                    <div>
                        <div className='artist-head'>
                            <div className='artist-info'>
                                <div className='avatar'>
                                    <img className='picture' src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png' />
                                </div>
                                <div className='artist-info-text'>
                                    <div className='artist-name'>{this.state.username}</div>
                                    <div className='artist-email'>{this.state.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className='artist-content'>
                            <ProfileGallery imgs={this.state.imgs} />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className='artist-head'>
                            <div className='artist-info'>
                                <div className='avatar'>
                                    <img className='picture' src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png' />
                                </div>
                                <div className='artist-info-text'>
                                    <div className='artist-name'>{this.state.username}</div>
                                    <div className='artist-email'>{this.state.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className='artist-content'>
                            <div className='image-info-text'>
                                No images uploaded.
                            </div>
                        </div>      
                    </div>
                )
            }
            
        }
        else {
            return null
        }      
    }
}

export default connect(
    state => ({ user: state.user }),
    { getUserProfile, resetUser }
)(Profile)