import React from 'react'

import DemoCarousel from '../../components/carousel'
import DemoGallery from '../../components/gallery'

import { reqMainGallery } from '../../api'

class MainInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainGallery: []
        }
    }
    
    componentDidMount() {
        reqMainGallery().then(({ data: images }) => {
            this.setState({
                mainGallery: images.data
            })
        })
    }

    render() {
        if (this.state.mainGallery.length) {
            return(
                <div>
                    <div className='carousel-content'>
                        <DemoCarousel />
                    </div>
                    <div className='artist-content'>
                        <DemoGallery images={this.state.mainGallery} />
                    </div>
                </div>
            )
        } else {
            return(
                <div className='carousel-content'>
                    <DemoCarousel />
                </div>
            )          
        }
    }
}

export default MainInfo
