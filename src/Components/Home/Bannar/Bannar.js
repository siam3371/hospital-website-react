import React from 'react';
import { Carousel } from 'react-bootstrap';

const Bannar = () => {
    return ( 
<>
{/* our hospital  bannar  */}
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src='https://i.ibb.co/NVfwyR3/adhy-savala-zbpgm-Ge27p8-unsplash-1.jpg'
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>1</h3>
            <p>Our Hospital is a largest Hospital in the world </p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src= ' https://i.ibb.co/0V2R6Yr/General-practitioner-presenting-x-ray-of-neck-Pediatrician-specialist-with-protection-mask-providing.jpg'
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>1</h3>
            <p> this is our hospital in the bigest
</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src='https://i.ibb.co/2hXpFhL/Nurse-with-protection-mask-writing-child-data-on-clipboard-during-covid-19-Physician-specialist-in-m.jpg'
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>3</h3>
            <p>noun. an institution in which sick or injured persons are given medical or surgical treatment. a similar establishment for the care of animals.
</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</>
// banner end
    );
};

export default Bannar;