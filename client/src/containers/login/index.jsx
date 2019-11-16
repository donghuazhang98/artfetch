/*
user login router component
*/
import React from 'react'
import SignInForm from './signInForm'
import SignUpForm from './signUpForm'

export default class Login extends React.Component { 
    render() {
        return (
            <div className="container">
                <article className="main-container">
                    <div className="tabs">
                        <span className="tab signin active">
                            <a href="#signin">Sign In</a>
                        </span>
                        <span className="tab signup">
                            <a href="#signin">Sign Up</a>
                        </span>
                    </div>
                    <div className="content">
                        <SignInForm />
                        <SignUpForm />
                    </div>      
                </article>
            </div>
        ) 
    }
}