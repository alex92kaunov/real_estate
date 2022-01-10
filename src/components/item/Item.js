import React, {useState} from 'react';
import './item.css'
import picktureItem1 from '../../assets/img/property-1/property1.jpg'
import {Link} from "react-router-dom";

function Item (props) {
    const [sendId, setSendId] = useState(0);

    return (
            <div className="itemBox" onClick={() => setSendId(props.data.id)}>
                    <Link to={"/details/" + props.data.id}>
                        <img className="imgItem" src={picktureItem1}/>
                    </Link>
                    <h6 className="nameItem">{props.data.rooms}-к. квартира {props.data.area} м²</h6>
                    <div className="priceP">{props.data.price} руб</div>
                    <hr className="hrStyle"/>

                    <div className="address">
                        <div className="addressItem">Комплекс: {props.data.complex.nameComplex}</div>
                        <div className="addressItem">Застройщик: {props.data.developer.nameDeveloper}</div>
                        <div className="addressItem">{props.data.address}</div>
                    </div>
            </div>
    );
}
export default Item;