import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import './Details.css'
import {Carousel, Button} from "react-bootstrap";
import imgHeader1 from "../assets/img/slide1/slider-image-1.jpg";
import imgHeader2 from "../assets/img/slide1/slider-image-2.jpg";
import imgHeader3 from "../assets/img/slide1/slider-image-3.png";

function DetailsItem () {
    const { id } = useParams();
    const [selectedItem, setSelected] = useState({});
    const [teleNumber, setTeleNumber] = useState('Показать номер');
    
    useEffect(() => {
        const fetchData = async () => {
            let dataItem = localStorage.getItem('data');
            let dataBase = JSON.parse(dataItem);
            let result = dataBase.find( function (item) {
                return item.id === Number(id);
            });
            if (result) {
                setSelected(result);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="viewContentBox">
                <Link to="/">
                    <h5>Назад</h5>
                </Link>
                <div className="viewHeader">
                    <div className="complexName">
                        <h2 className="headerStyle">{selectedItem ? selectedItem.rooms : ''}к. квартира,
                            {selectedItem ? selectedItem.area : ''} м²</h2>
                    </div>
                    <div className="priceItem">
                        <h2>{selectedItem ? selectedItem.price : ''} руб</h2>
                    </div>
                </div>
                <div className="photo">
                    <Carousel fade className="sliderBlock">
                        <Carousel.Item className="sliderItem">
                            <img className="d-block w-100" src={imgHeader1} alt="First slide"/>
                        </Carousel.Item>

                        <Carousel.Item className="sliderItem">
                            <img className="d-block w-100" src={imgHeader2} alt="Second slide"/>
                        </Carousel.Item>

                        <Carousel.Item className="sliderItem">
                            <img className="d-block w-100" src={imgHeader3} alt="Third slide"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h4 className="h4StyleHeader">О квартире</h4>
                <div className="viewDescription">
                    <table>
                        <tr>
                            <td className="cell_Style">Застройщик:</td>
                            <td className="cell_Style color_font">{selectedItem.developer ? selectedItem.developer.nameDeveloper : ''}</td>
                        </tr>
                        <tr>
                            <td className="cell_Style">Жилой комплекс:</td>
                            <td className="cell_Style color_font">{selectedItem.complex ? selectedItem.complex.nameComplex : ''}</td>
                        </tr>
                        <tr>
                            <td className="cell_Style">Адрес:</td>
                            <td className="cell_Style color_font">{selectedItem ? selectedItem.address : ''}</td>
                        </tr>
                        <tr>
                            <td className="cell_Style">Количество комнат:</td>
                            <td className="cell_Style color_font">{selectedItem ? selectedItem.rooms : ''}</td>
                        </tr>
                        <tr>
                            <td className="cell_Style">Площадь:</td>
                            <td className="cell_Style color_font">{selectedItem ? selectedItem.area : ''}</td>
                        </tr>
                        <tr>
                            <td className="cell_Style">Вид сделки:</td>
                            <td className="cell_Style color_font">{selectedItem ? selectedItem.deal : ''}</td>
                        </tr>
                        <tr>
                            <td className="cell_Style">Новое/вторичка:</td>
                            <td className="cell_Style color_font">{selectedItem ? selectedItem.history : ''}</td>
                        </tr>
                        <tr>
                            <td className="cell_Style">Описание:</td>
                            <td className="cell_Style color_font">{selectedItem ? selectedItem.specification : ''}</td>
                        </tr>
                    </table>
                    <div className="containerButton">
                        <Button className="btnStyle" variant="warning"
                                onMouseMove={() => setTeleNumber(selectedItem.tele)}
                                onMouseOut={() => setTeleNumber('Показать номер')}
                                >{teleNumber}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailsItem;

