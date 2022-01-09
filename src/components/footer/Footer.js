import React from "react";
import './Footer.css'
import {Form, Button} from "react-bootstrap";

function Footer () {
    return (
        <div className="footerContainer">
            <div className="footerAbout">
                <h4 className="footerH4">Помошь пользователю</h4>
                    <ul>
                        <a href=""><li>Как зарегистрироваться</li></a>
                        <a href=""><li>Список городов</li></a>
                        <a href=""><li>README</li></a>
                    </ul>
            </div>
            <div className="footerDeveloper">
                <h4 className="footerH4">Разработчик</h4>
                <ul>
                    <a href=""><li>Каунов Александр</li></a>
                    <a href=""><li>devforbuss@gmail.com</li></a>
                    <a href=""><li>Опыт</li></a>
                    <a href=""><li>Ключевые навыки</li></a>
                    <a href=""><li>Образование</li></a>
                    <a href=""><li>Социальные сети</li></a>
                </ul>
            </div>
            <div className="footerContact">
                <h4 className="footerH4">Оставайся на связи</h4>
                <ul>
                    <a href=""><li>г. Москва</li></a>
                    <a href=""><li>ООО "Property For Sale"</li></a>
                    <a href=""><li>+7800-888-25-62</li></a>
                </ul>
                <Form>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="E-mail ... "/>
                        <button className="btn btn-primary subscribe" type="button">Подписаться</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
export default Footer;