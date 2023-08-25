import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img/banner1.jpg";
import img2 from  "./img/pic1.jpeg";
import img3 from "./img/pic2.jpeg" ;
import img4 from "./img/pic3.jpeg";
import img5 from "./img/pic4.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

function Slide() {
    return(
        <div className="carousel-container d-flex justify-content-center ">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={img1}
              alt="slide1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={img2}
              alt="slide2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={img3}
              alt="slide3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={img4}
              alt="slide4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={img5}
              alt="slide5"
            />
          </Carousel.Item>
        </Carousel>
      </div>

    )
}

export default Slide;