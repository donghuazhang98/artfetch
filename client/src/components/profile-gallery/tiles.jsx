import React from 'react'
import Tile from './tile'
import './index.scss'

export default class Tiles extends React.Component {
    render() {
        return (
            <div className='tiles'>
                {
                    this.props.data.map((img) => {
                        return <Tile img={img} />
                    })
                }
            </div>
        )
    }
}