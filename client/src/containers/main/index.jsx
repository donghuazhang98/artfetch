import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'

import { getUser, resetUser } from '../../redux/actions'
import DemoCarousel from '../../components/carousel'
import DemoGallery from '../../components/gallery'
import TopLine from '../../components/topBar'

import Info from '../info'
import Profile from '../profile'
import Post from '../post'

import './index.scss'

class Main extends React.Component {

    componentDidMount() {
        const userid = Cookies.get('userid')
        const { user } = this.props
        if (userid && !user._id) {
            this.props.getUser()
        }
    }

    render() {
        const userid = Cookies.get('userid')
        if (!userid) {
            return <Redirect to='/login' />
        }
        const { user } = this.props
        //console.log(user)
        if (!user._id) {
            return null
        }

        return(
            <div>
                <TopLine />
                <Info />
            </div>    
        )
    }
}

export default connect(
   state =>  ({ user: state.user }),
   { getUser, resetUser }
)(Main)