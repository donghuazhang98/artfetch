import React from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Fab from "@material-ui/core/Fab";

export default class PostButton extends React.Component {
    handleClick = () => {
        this.props.history.push(this.props.navList[1].path)
    }
    
    render() {
        return (
                <Fab color="default" aria-label="Home" size="small" onClick={this.handleClick}>
                    <AddRoundedIcon />
                </Fab>
        )
    }
}