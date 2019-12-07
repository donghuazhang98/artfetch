/*
user login router component
*/
import React from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import img from './img/john-wallin-liberto-thingamajiggre2small.jpg'
import { signup, login } from '../../redux/actions'

class Login extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        }
    }
    
    loginState = {
        username: '',
        password: ''
    }

    signupState = {
        username: '',
        email: '',
        password: '',
        password2: '',
        
    }

    switchTabs = type => {
        switch (type) {
            case 'login':
                this.setState({
                    activeTab: 0
                })
                break;
            case 'signup':
                this.setState({
                    activeTab: 1
                })
                break;
            default:
                break; 
        }
    }

    loginHandleChange = (name, val) => {
        this.loginState[name] = val.target.value
    }

    signupHandleChange = (name, val) => {
        this.signupState[name] = val.target.value
    }

    login = () => {
        this.props.login(this.loginState)
    }

    signup = () => {
        this.props.signup(this.signupState)
    }

    render() {
        const {redirectTo, msg} = this.props
        if (redirectTo) {
            return <Redirect to={redirectTo} />
        }

        return (
            <div className="container">
                <div className="first-half">
                    <h1 className="title">ArtFetch</h1>
                    <div className="tabs">
                        <span 
                            className={`tab login ${this.state.activeTab === 0 ? 'active' : null}`}
                            onClick = {() => this.switchTabs('login')}
                        >
                            <a>Log In</a>
                        </span>
                        <span 
                            className={`tab signup ${this.state.activeTab === 1 ? 'active' : null}`}
                            onClick = {() => this.switchTabs('signup')}
                        >
                            <a>Sign Up</a>
                        </span>
                    </div>
                    <div className="content">
                        <div 
                            className="login-content" 
                            style={{display: this.state.activeTab === 0 ? 'block' : 'none'}}
                        >
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input className="input" placeholder="Username" onChange={val => {val.persist();this.loginHandleChange('username', val)}} />
                                    <input className="input" placeholder="Password" onChange={val => this.loginHandleChange('password', val)} />
                                </div>
                                <div className="submit-group">
                                    <input type="button" className="submit" value="Log in" onClick={this.login} />
                                    <div className="extra">
                                        <a href="#" className="extra">Forgot your password?</a>
                                    </div>   
                                </div>
                            </form>
                        </div>
                        
                        <div 
                            className="signup-content" 
                            style={{display: this.state.activeTab===1 ? 'block' : 'none'}}
                        >
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input className="input" placeholder="Username" onChange={val => this.signupHandleChange('username', val)} />
                                    <input className="input" placeholder="Email" onChange={val => this.signupHandleChange('email', val)} />
                                    <input className="input" placeholder="Password" onChange={val => this.signupHandleChange('password', val)} />
                                    <input className="input" placeholder="Password confirm" onChange={val => this.signupHandleChange('password2', val)} />
                                </div>
                                <div className="submit-group">
                                    <input type="button" className="submit" value="Sign up" onClick={this.signup} />
                                </div>
                            </form>
                        </div>
                    </div>      
                </div>
                <div className="second-half">
                    <div 
                        className="image" 
                        style={{
                            background: `url(${img})`,
                            backgroundSize: '100%',
                        }} 
                    />
                </div>
            </div>
        ) 
    }
}

export default connect(
    state => state.user,
    {login, signup},
)(Login)    

