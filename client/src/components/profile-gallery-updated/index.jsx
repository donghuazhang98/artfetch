import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

export default class ProGalleryUp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            imgs: []
        }
    }

    componentDidMount() {
        const { images } = this.props.user
        this.setState({
            imgs: this.state.imgs.concat(images)
        })
    }

    render() {
        return (
            <Gallery photos={this.state.imgs} />
        )
    }
}

