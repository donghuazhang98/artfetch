import React, {Component} from 'react';
import img from './img/close-up-photo-of-painting-3219899.jpg'

class BackgroundImg extends Component{
    render(){
        const style = {
            background: `url(${img})`,
            backgroundSize: '100%，100%',
            width: '100%',
            height: '100%',
        }

        return(
            <div style = {{...style}}></div>
        )
    }
}

export default BackgroundImg;