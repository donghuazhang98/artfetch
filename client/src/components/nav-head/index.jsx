import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

export default class NavHead extends React.Component { 
    render() {
        return(
            <div className='main-menu'>
                <span className='main-menu-title'>
                    <a>ArtFetch</a>
                </span>
                <span className='main-menu-search'>
                    <form className='form' role='search'></form>
                </span>
                <span className='main-menu=bar-item '>

                </span>
            </div>
        )
    }
}