import React from "react";
import Icon from "./img/Icon.png";

export default class TitleIcon extends React.Component {

    handleClick = () => {
        this.props.history.push('/')
    }
    
    render() {
        return (
            <img onClick={this.handleClick} src={Icon} width={'100%'} style={{ cursor: 'pointer' }} alt='profile' />
        )
    }
}