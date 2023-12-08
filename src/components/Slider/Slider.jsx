import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Slider = () => {
    return (
        <AwesomeSlider animation="cubeAnimation"
          media={[
            {
              source: '/src/assets/images/1.png',
            },
            {
              source: '/src/assets/images/2.png',
            },
            {
              source: '/src/assets/images/3.png',
            },
          ]}
        />
    );
};

export default Slider;