import React from "react";
import { Zoom } from "react-slideshow-image";

const Slideshow = () => {
  const images = ["images/slider-1.jpg", "images/slider-2.jpg", "images/slider-3.jpg", "images/slider-4.jpg"];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
