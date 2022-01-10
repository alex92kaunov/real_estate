import React from "react";
import imgHeader1 from '../../assets/img/slide1/slider-image-1.jpg'
import imgHeader2 from '../../assets/img/slide1/slider-image-2.jpg'
import imgHeader3 from '../../assets/img/slide1/slider-image-3.png'
import './Header.css'
import {Carousel, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header () {
    return (
        <div className="logBox">
            <div className="buttonBox">
                <Link to="./admin">
                    <Button className="btnAdmin" variant="primary">Админ</Button>
                </Link>
            </div>
            <Carousel fade className="sliderBlock">
            <Carousel.Item className="sliderItem">
                <img className="d-block w-100" src={imgHeader1} alt="First slide"/>
                <Carousel.Caption>
                    <h3>Более 117 город по всей России</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="sliderItem">
                <img className="d-block w-100" src={imgHeader2} alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Элитная недвижимость</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="sliderItem">
                <img className="d-block w-100" src={imgHeader3} alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Доступно всем</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}
export default Header;