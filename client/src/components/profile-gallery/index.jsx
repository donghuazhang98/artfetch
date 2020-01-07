import React from 'react'
import Tiles from './tiles'

export default class ProGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            imgs: []
        }
    }

    componentDidMount() {
        const { images } = this.props.user
        console.log(images)
        this.setState({
            imgs: this.state.imgs.concat(images)
        })
    }
    
    render() {
        console.log(this.state.imgs)
        return (
            <Tiles data={this.state.imgs} />
        )
    }
}