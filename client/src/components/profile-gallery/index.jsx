import React from "react";
import Gallery from "react-photo-gallery";

export default class ProfileGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            images: []
        }
    }

    componentDidMount() {
        this.setState({
            images: this.state.images.concat(this.props.images)
        })
    }

    render() {
        return (
            <Gallery photos={this.state.images} direction={"row"}/>
        )
    }
}

