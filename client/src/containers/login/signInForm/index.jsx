import React from 'react'
import './index.less'

export default class SignInForm extends React.Component {
    render() {
        return(
            <form action="#" method="post">
                <div className="input-group">
                    <input className="input" placeholder="Username" />
                    <input className="input" placeholder="Password" />
                </div>
                <div className="submit-group">
                    <input type="submit" className="submit" value="Sign in" />
                    <a href="#" className="extra">Forgot your password?</a>
                </div>
            </form>
        )
    }
}