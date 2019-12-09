import React from 'react'
import ImageUploader from 'react-images-upload'
import { storage, database } from '../../firebase'

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            upload: false
        }
    }

    fileDropHandler = pict => {
        this.setState({
            pictures: this.state.pictures.concat(pict),
            upload: true
        })
    }

    uploadHandler = () => {
        let username = this.props.user.username
        //console.log(username)
        const img = this.state.pictures[this.state.pictures.length-1]
        //console.log(img)
        const uploadTask = storage.ref(`images/${username}/${img.name}`).put(img)
        uploadTask.on('state_changed',
        (snapshot) => {}
        ,
        (error) => {
            console.log(error)
        },
        () => {
            let url = storage.ref(`images/${username}`).child(img.name).getDownloadURL().then(url => {
                //console.log(url)
                let obj = {
                    image: url
                }
                database.ref(`users/${username}/images`).push(obj)
            })
        })
    }

    render() {
        //console.log(this.state.pictures[0])
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
                    <button
                        onClick={this.uploadHandler}
                    >
                        upload
                    </button>
                </div>
                
            )
    }
}

export default Upload
