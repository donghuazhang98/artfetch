import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

export default class ProfileGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            imgs: []
        }
    }

    componentDidMount() {
        this.setState({
            imgs: this.state.imgs.concat(this.props.imgs)
        })
    }

    render() {
        return (
            <Gallery photos={this.state.imgs} />
        )
    }
}

