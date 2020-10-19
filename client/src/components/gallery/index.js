import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

import "./styles.scss";

import { withRouter } from 'react-router-dom'

function App(props) {
  
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(props.images)
  }, [props.images])

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   console.log(images[index].username)
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // });

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  const directToProfile = useCallback((event, { photo, index }) => {
    props.history.push(`/profile/${images[index].username}`)
  });

  const directToRoom = useCallback((event, { photo, index }) => {
    props.history.push(`/profile/${images[index].username}/image/${images[index]._id}`)
  });

  return (
    <div>
      <Gallery photos={images} onClick={directToRoom} />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
}

// const BasicRows = () => <Gallery photos={this.props.photos} />;

export default withRouter(App);


