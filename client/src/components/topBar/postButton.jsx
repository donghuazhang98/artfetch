import React from "react";
import Button from "@material-ui/core/Button";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Fab from "@material-ui/core/Fab";

export default class PostButton extends React.Component {
    handleClick = () => {
        this.props.history.push(this.props.navList[1].path)
    }
    
    render() {
        return (
            <Button onClick={this.handleClick}>
                    <Fab color="disabled" aria-label="Home" size="small">
                        <AddRoundedIcon />
                    </Fab>
            </Button>
        )
    }
}