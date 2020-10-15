import React from 'react'
import './index.scss'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { getUser, getUserProfile, resetUser } from '../../redux/actions'

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

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
    
    }
}

export default connect(
    state => ({ user: state.user }),
    { getUser, getUserProfile, resetUser }
)(Room)