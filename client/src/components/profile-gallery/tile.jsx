import React from 'react'
import './index.scss'

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handlerClick = e => {
        e.preventDefault()
        if (this.state.open === false) {
            this.setState({
                open: true
            })
        } else {
            this.setState({
                open: false
            })
        }
    }

    render() {
        //console.log(this.props.img.image)
        let tileStyle = {}
        if (this.state.open) {
            tileStyle = {
                width: '62vw',
                height: '62vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '0',
                marginTop: '-31vw',
                marginLeft: '-31vw',
                transform: 'none'
            }
        } else {
            tileStyle = {
                width: '16vw',
                height: '16vw',
                minWidth: '100px',
                minHeight: '100px',
            }
        }
        return(
            <div className='tile'>
                <img 
                    onClick={this.handlerClick}
                    src={this.props.img.image}
                    //alt={this.props.img.name}
                    style={tileStyle}
                />
            </div>
        )
    }
}