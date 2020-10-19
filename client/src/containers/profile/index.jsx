import React from 'react'
import ProfileGallery from '../../components/profile-gallery'
import DemoGallery from '../../components/gallery'
import './index.scss'

import { connect } from 'react-redux'

import { reqUserProfile } from '../../api'

class Profile extends React.Component {l
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            images: []
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props

        reqUserProfile(params.username).then(({ data: user }) => {
            this.setState({
                username: user.data.username,
                email: user.data.email,
                images: user.data.images
            })
        })
        //console.log(this.state.images)
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
                    images: user.data.images
                })
            })
        }
    }

    render() {
        if (this.state.username !== '') {
            if (this.state.images.length) {
                return (
                    <div>
                        <div className='artist-head'>
                            <div className='artist-info'>
                                <div className='avatar'>
                                    <img className='picture' src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png' alt='404.png' />
                                </div>
                                <div className='artist-info-text'>
                                    <div className='artist-name'>{this.state.username}</div>
                                    <div className='artist-email'>{this.state.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className='artist-content'>
                            <DemoGallery images={this.state.images} />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className='artist-head'>
                            <div className='artist-info'>
                                <div className='avatar'>
                                    <img className='picture' src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png' alt='404.png' />
                                </div>
                                <div className='artist-info-text'>
                                    <div className='artist-name'>{this.state.username}</div>
                                    <div className='artist-email'>{this.state.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className='image-content'>
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

export default Profile