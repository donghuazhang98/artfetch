import React from 'react'
import ImageUploader from 'react-images-upload'
import { withRouter } from 'react-router-dom'
import { storage } from '../../firebase'

import { reqUploadImage } from '../../api'

import axios from 'axios'

import './index.scss'

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
        }
    }

    fileDropHandler = pict => {
        this.setState({
            pictures: this.state.pictures.concat(pict),
        })
    }

    uploadHandler = () => {
        let username = this.props.user.username
        const img = this.state.pictures[this.state.pictures.length-1]

        let uploadTask = storage.ref(`images/${username}/${img.name}`).put(img)
        uploadTask.on('state_changed',
            (snapshot) => {},
            (error) => {
                console.log(error)
            },
            () => {
                let url = storage.ref(`images/${username}`).child(img.name).getDownloadURL().then(url => {
                    let imageObj = {
                        imageName: img.name,
                        imageData: url
                    }
                    //console.log(imageObj)
                    reqUploadImage(imageObj)
                        .then((data) => {
                            if (data.data) {
                                console.log(data.data)
                                this.props.history.push('/profile')
                                this.props.history.go()
                            }
                        })
                        .catch((err) => {
                            alert(err)
                        })
                })
        })
    }

    render() {
        return (
            <div>
                <ImageUploader
                    withIcon={false}
                    buttonText='select image'
                    onChange={this.fileDropHandler}
                    imgExtension={['.jpg', '.png', 'jpeg']}
                    withPreview={true}
                    singleImage={true}
                    withLabel={false}
                />
                <div className='post-bar'>
                    <button
                        onClick={this.uploadHandler}
                        className='post-button'
                    >
                        upload
                    </button>
                </div>   
            </div>      
        )
    }
}

export default withRouter(Upload)
