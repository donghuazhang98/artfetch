import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cookies from 'js-cookie'

import {getUser} from '../../redux/actions'

export default class Main extends React.Component {
    render() {
        const userid = Cookies.get('userid')
        console.log(userid)
        if (!userid) {
            this.props.history.replace('/login')
            return null
        }
        return(
            <div>main</div>
        )
    }
}