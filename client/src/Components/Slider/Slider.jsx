import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { sliderdata} from '../../assets/sliderdata';
import "./Slider.module.css"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slider = () => {
    return (
        <div className="carousel-container">
          <Carousel responsive={responsive} autoPlay={true}>
            {sliderdata.map(image => (
              <div key={image.id}>
                <img src={image.url} alt={`Image ${image.id}`} />
              </div>
            ))}
          </Carousel>
        </div>
      );
    };

export default Slider;
