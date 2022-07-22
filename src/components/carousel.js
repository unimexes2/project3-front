import Carousel from 'react-bootstrap/Carousel';
import img from "./../pictures/carousel.jpg"

function CarouselBasement() {
    let img1 = img;

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
                    src={img1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block-w-100"
                    src={img1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBasement;