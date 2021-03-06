import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay infiniteLoop={true} showThumbs={false} showStatus={false}>
        <div style={{ height: "100%", color: "#fff" }}>
          <img
            src="https://cdna.artstation.com/p/assets/images/images/020/326/638/large/pablo-carpio-stoneday.jpg?1567356075"
            alt="404.png"
          />
        </div>
        <div style={{ height: "100%", color: "#fff" }}>
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/020/326/639/large/pablo-carpio-stonenight.jpg?1567355685"
            alt="404.png"
          />
        </div>
        <div style={{ height: "100%", color: "#fff" }}>
          <img
            src="https://cdna.artstation.com/p/assets/images/images/022/312/198/large/ffie-yu-2.jpg?1574942667"
            alt="404.png"
          />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
