import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";

import MainInfo from '../mainInfo'
import Profile from '../profile'
import Post from '../post'
import TopBar from '../../components/topBar'
import Footer from '../../components/footer'

import { getUser, resetUser } from '../../redux/actions'

import './index.scss'

class Main extends React.Component {
    
    navList = [
        {
            path: '/profile'
        },
        {
            path: '/post'
        }
    ]

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

        if (!user._id) {
            return null
        }

        return(
            <div>
                <TopBar className='top-bar' navList={this.navList} />
                <Switch>
                    <Route path='/post' component={Post} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/' component={MainInfo} />
                </Switch>
                <Footer />
            </div>    
        )
    }
}

export default connect(
   state =>  ({ user: state.user }),
   { getUser, resetUser }
)(Main)