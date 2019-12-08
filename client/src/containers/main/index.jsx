import React from 'react'
import DemoCarousel from './carousel'
import DemoGallery from './gallery'
import TopLine from './topline'

export default class Main extends React.Component {
    render() {
        return(
            <div>main
                <div>
                    <TopLine/>
                </div>
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