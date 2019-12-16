import React, { Component } from "react";
import Icon from "./img/Icon.png";

import { Redirect } from 'react-router-dom'

export default class TitleIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toMain: false
        }
    }

    handleClick = () => {
        this.setState({
            toMain: true
        })
    }
    
    render() {
        if (this.state.toMain) {
            return <Redirect to='/' />
        }
        return (
            <img onClick={this.handleClick} src={Icon} width={'100%'} style={{ cursor: 'pointer' }} />
        )
    }
}