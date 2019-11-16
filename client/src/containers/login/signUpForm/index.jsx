import React from 'react'
import './index.less'

export default class SignUpForm extends React.Component {
    render() {
        return(
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
        )
    }
}