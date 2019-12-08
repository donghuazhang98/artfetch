import React from 'react'
import DemoCarousel from './carousel'
import DemoGallery from './gallery'

export default class Main extends React.Component {
    render() {
        return(
            <div>main
                <div>

                    <DemoCarousel/>

                </div>
                <div>
                    <DemoGallery/>
                </div>
            </div>

        )
    }
}