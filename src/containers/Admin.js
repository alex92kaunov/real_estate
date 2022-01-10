import React from 'react';
import {mockData} from "../helpers/data";
import ModalForm from "../components/ModalForm";
import {Button, Table, CloseButton} from "react-bootstrap";
import './Admin.css'
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import {Link} from "react-router-dom";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mockData: [],
            viewModal: false,
            headerModal: 0,
            item: {},
            defaultItem: {
                id: null,
                complex:  {
                    id: null,
                    nameComplex: ''
                },
                developer:  {
                    id: null,
                    nameDeveloper: ''
                },
                address: '',
                rooms: null,
                area: null,
                type: '',
                deal: '',
                history: '',
                price: null,
                tele: '',
                specification: ''
            }
        }
    }

    componentDidMount() {
        let dataItem = localStorage.getItem('data');
        if (dataItem != null) {
            this.setState({mockData: JSON.parse(dataItem)});
        }
        else    {
            this.setState({mockData: mockData});
            localStorage.setItem('data', JSON.stringify(mockData));
        }
    }
    onUpdateClick   = (e) => {
        let findId = Number(e.target.dataset.id);
        let dataBase = [...this.state.mockData];
        let result = dataBase.find( function (item) {
            return item.id === findId;
        });
        if (result) {
            this.setState({item: result, viewModal: true});
        }
    }
    onHide = (view) => {
        this.setState({viewModal: view});
    }
    buttonDelete = (e)=> {
        let findId = e.target.dataset.id;
        let arrayMas = [...this.state.mockData];
        for (let i = 0; i < arrayMas.length; i++) {
            if (Number(findId) === Number(arrayMas[i].id)) {
                arrayMas.splice(i,1);
                break;
            }
        }
        this.setState({mockData: arrayMas}, function () {
            localStorage.setItem('data', JSON.stringify(this.state.mockData))
        })
    }
    setParentState = (state={},callback) => {
        this.setState(state, callback);
    }
    saveElement = (id) => {
        let arrayMas = [...this.state.mockData];
        if (id && id > 0) {
            for (let i = 0; i < arrayMas.length; i++) {
                if (Number(id) === Number(arrayMas[i].id)) {
                    arrayMas[i] = this.state.item;
                    break;
                }
            }
            this.setState({mockData: arrayMas, item: this.state.defaultItem, viewModal: false}, function () {
                localStorage.setItem('data', JSON.stringify(this.state.mockData))});
        }
        else {
            arrayMas.push({...this.state.item, id: Date.now()});
            this.setState({mockData: arrayMas, viewModal: false}, function () {
                localStorage.setItem('data', JSON.stringify(this.state.mockData))});
        }
    }
    onClearLoc = () =>    {
        localStorage.clear();
    }
    render()
    {
        return (
            <div className="dataBase" >
                <div className="btnCloseContainer">
                    <Link to="/">
                        <CloseButton className="" />
                    </Link>
                </div>
                <div className="dataBaseHeader">
                    <h1>База данных:</h1>
                    <div className="buttonWrapper">
                        <Button onClick={() => {this.onHide(true)}} variant="outline-primary">Создать</Button>
                        <Button  onClick={this.onClearLoc} variant="outline-secondary">Очистить localStorage</Button>
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="thStyle">id</th>
                            <th className="thStyle">Комплекс</th>
                            <th className="thStyle">Застройщик</th>
                            <th className="thStyle">Адрес</th>
                            <th className="thStyle">Комнат</th>
                            <th className="thStyle">Площадь</th>
                            <th className="thStyle">Тип</th>
                            <th className="thStyle">Вид сделки</th>
                            <th className="thStyle">Новое/вторичка</th>
                            <th className="thStyle">Цена</th>
                            <th className="thStyle">Телефон</th>
                            <th className="thStyle">Описание</th>
                            <th className="thStyle">Изменить элемент</th>
                            <th className="thStyle">Удалить элемент</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.mockData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.complex.nameComplex}</td>
                                <td>{item.developer.nameDeveloper}</td>
                                <td>{item.address}</td>
                                <td>{item.rooms}</td>
                                <td>{item.area}</td>
                                <td>{item.type}</td>
                                <td>{item.deal}</td>
                                <td>{item.history}</td>
                                <td>{item.price}</td>
                                <td>{item.tele}</td>
                                <td>{item.specification}</td>
                                <td>
                                    <Button data-id={item.id} onClick={this.onUpdateClick} variant="success">Изменить</Button>
                                </td>
                                <td>
                                    <Button data-id={item.id} onClick={this.buttonDelete} variant="danger">Удалить</Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
                <ModalForm show={this.state.viewModal}
                           onHide={() => {this.onHide(false)}}
                           changeItem={this.state.item}
                           setParentState={this.setParentState}
                           saveElement={this.saveElement}/>
            </div>
        )
    }
}
export default Admin;