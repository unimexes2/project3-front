import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../pictures/1.jpg"
import img2 from "./../pictures/2.jpg"
import img3 from "./../pictures/3.jpg"
function CarouselBasement() {


    return (
        <Carousel>
            <Carousel.Item>

                <img
                    className="d-block-w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                   className="d-block-w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block-w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBasement;