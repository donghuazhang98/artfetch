import React from 'react'

import DemoCarousel from '../../components/carousel'
import DemoGallery from '../../components/gallery'

export default class Info extends React.Component {

    render() {
        return(
            <div>
                <div className='carousel-content'>
                    <DemoCarousel/>
                </div>
                <div>
                    <DemoGallery/>
                </div>
            </div>
        )      
    }
}