import React from 'react'
import Upload from '../../components/upload'
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions'
import Cookies from 'js-cookie'

class Post extends React.Component { 
    componentDidMount() {
        const userid = Cookies.get('userid')
        const { user } = this.props
        if (userid && !user._id) {
            this.props.getUser()
        }
    }
    
    render() {
        return (
            <div>
                <Upload user={this.props.user} />
            </div>    
        )
    }
}

export default connect(
    state =>  ({ user: state.user }),
    { getUser }
 )(Post)