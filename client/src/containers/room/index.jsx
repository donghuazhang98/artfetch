import React from 'react'
import './index.scss'
import { connect } from 'react-redux'

import { reqImage } from '../../api'

import ProfileGallery from '../../components/profile-gallery'
import About from '../../components/about'

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            image: null,
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props

        reqImage(params.username, params.image_id).then(({ data: user }) => {
            this.setState({
                username: params.username,
                email: user.data.email,
                image: user.data.images[0]
            })
        })
    }

    // update when url changes 
    componentDidUpdate(previousProps) {
        // compare two url username parameters
        const newUsername = this.props.match.params.username
        const oldUsername = previousProps.match.params.username
        const newImageID = this.props.match.params.image_id
        const oldImageID = previousProps.match.params.image_id

        if (oldUsername !== newUsername && newImageID !== oldImageID) {

            reqImage(newUsername, newImageID).then(({ data: user }) => {
                this.setState({
                    username: newUsername,
                    email: user.data.email,
                    images: user.data.images[0]
                })
            })
        }
    }    
    
    render() {
        if (this.state.image != null) {
            return(
                <div className='room-info'>
                    <ProfileGallery images={this.state.image} />
                    <About username={this.state.username} />
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
    {}
)(Room)