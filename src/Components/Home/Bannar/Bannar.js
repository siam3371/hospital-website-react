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
            src='https://i.ibb.co/dbtJdVb/Doctor-asking-nurse-for-pills-during-consultation-in-medical-office-Physician-specialist-in-medicine.jpg'
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Simple Conversation Between Doctor and Patient About Headache </p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src= ' https://i.ibb.co/0V2R6Yr/General-practitioner-presenting-x-ray-of-neck-Pediatrician-specialist-with-protection-mask-providing.jpg'
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p> 10 golden communication tips for doctors. And 3 things they shouldn't do.
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
            <h3>Third slide label</h3>
            <p>using quotation marks around the speaker's exact words. These quotation marks are meant to set the dialogue</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</>
// banner end
    );
};

export default Bannar;