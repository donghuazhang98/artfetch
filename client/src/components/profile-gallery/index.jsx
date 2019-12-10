import React from 'react'
import Tiles from './tiles'
import { database } from '../../firebase'

export default class ProGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            imgs: []
        }
    }

    componentDidMount() {
        const { username } = this.props.user
        const data = database.ref(`users/${username}/images`)
        //console.log(this.props.user)
        data.once('value', (snapshot, preChildKey) => {
            snapshot.forEach((childSnapShot) => {
                let childKey = childSnapShot.key
                let childData = childSnapShot.val()
                this.setState({
                    imgs: this.state.imgs.concat(childData),
                })
            })
            //console.log(this.state.imgs)
            //let newPost = snapshot.val()
            //console.log(snapshot)
        })
        //console.log(this.state.imgs)
    }
    
    render() {
        
        return (
            <Tiles data={this.state.imgs} />
        )
    }
}