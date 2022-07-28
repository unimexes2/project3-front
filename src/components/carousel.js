import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../pictures/1.jpg"
import img2 from "./../pictures/2.jpg"
import img3 from "./../pictures/3.jpg"
import axios from "axios";
import { useState, useEffect } from "react";
function CarouselBasement() {
    const [logo, setLogo] = useState([]);
const API_URL = process.env.REACT_APP_API_URL;
   
useEffect(() => {
        axios
              .get(API_URL+"/logo/")
              .then((response) => {
                
                const logoObj =[... response.data[0].carusel];
            
               
              
                setLogo(logoObj);
                

              })
              .then(()=>{console.log(logo)})
              .catch((error) => console.log(error));
          
            }, []);

    return (
        <Carousel>
        { logo.map((image) => {
            console.log(image,"image")
            return(<Carousel.Item>
                <img
                    className="d-block-w-100"
                    src={image}
                    
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>)
        })}




        </Carousel>
    );
}

export default CarouselBasement;