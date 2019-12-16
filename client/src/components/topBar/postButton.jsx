import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Fab from "@material-ui/core/Fab";

import { Redirect } from 'react-router-dom'

export default class PostButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toPost: false
        }
    }

    handleClick = () => {
        this.setState({
            toPost: true
        })
    }
    
    render() {
        if (this.state.toPost) {
            return <Redirect to='/post' />
        }
        return (
            <Button onClick={this.handleClick}>
                    <Fab color="disabled" aria-label="Home" size="small">
                        <AddRoundedIcon />
                    </Fab>
            </Button>
        )
    }
}