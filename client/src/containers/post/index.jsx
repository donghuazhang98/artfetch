import React from 'react'
import Upload from '../../components/upload'
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions'
import Cookies from 'js-cookie'

import TopLine from '../../components/topBar'

class Post extends React.Component { 
    componentDidMount() {
        const userid = Cookies.get('userid')
        const { user } = this.props
        if (userid && !user._id) {
            this.props.getUser()
        }
    }
    
    render() {
        //console.log(this.props.user)
        return (
            <div>
                <TopLine />
                <Upload user={this.props.user} />
            </div>    
        )
    }
}

export default connect(
    state =>  ({ user: state.user }),
    { getUser }
 )(Post)