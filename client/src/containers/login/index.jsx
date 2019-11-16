/*
user login router component
*/
import React from 'react'
import './index.scss'
import img from './img/john-wallin-liberto-thingamajiggre2small.jpg'

export default class Login extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    switchTabs = type => {
        switch (type) {
            case 'signin':
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

    render() {
        return (
            <div className="container">
                <div className="first-half">
                    <h1 className="title">ArtFetch</h1>
                    <div className="tabs">
                        <span 
                            className={`tab signin ${this.state.activeTab === 0 ? 'active' : null}`}
                            onClick = {() => this.switchTabs('signin')}
                        >
                            <a href="#signin">Log In</a>
                        </span>
                        <span 
                            className={`tab signup ${this.state.activeTab === 1 ? 'active' : null}`}
                            onClick = {() => this.switchTabs('signup')}
                        >
                            <a href="#signin">Sign Up</a>
                        </span>
                    </div>
                    <div className="content">
                        <div 
                            className="signin-content" 
                            style={{display: this.state.activeTab === 0 ? 'block' : 'none'}}
                        >
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input className="input" placeholder="Username" />
                                    <input className="input" placeholder="Password" />
                                </div>
                                <div className="submit-group">
                                    <input type="submit" className="submit" value="Log in" />
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
                                    <input className="input" placeholder="Username" />
                                    <input className="input" placeholder="Email" />
                                    <input className="input" placeholder="Password" />
                                    <input className="input" placeholder="Password confirm" />
                                </div>
                                <div className="submit-group">
                                    <input type="submit" className="submit" value="Sign up" />
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
