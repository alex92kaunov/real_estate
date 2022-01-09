import React from "react";
import './filter.css'
import {Form, Button, Row, Col} from "react-bootstrap";
import {complexData} from "../../helpers/Complex";
import {developerData} from "../../helpers/Developer";
import Item from "../item/Item";

class Filter extends React.Component {
   constructor(props) {
       super(props);
       this.state ={
            changeItem:    {
                types: '',
                sale_rent: '',
                old_new: '',
                rooms: 0,
                square: 0,
                priceOt: 0,
                priceDo: 0,
                address: ''
            },
            complexList: [],
            developerList: [],
            filter: {}
        }
    }
    componentDidMount() {
       //Имитация запроса на сервер
       this.setState({complexList: complexData, developerList: developerData});
    }

    changeComplexSelect = (e) => {
        this.setState({filter: {...this.state.filter, complexValue: e.target.value}})
    }
    changeDeveloperSelect = (e) => {
        this.setState({filter: {...this.state.filter, developerValue: e.target.value}})
    }

    changePriceSelectFrom = (e) => {
       if (!isNaN(e.target.value))
           this.setState({filter: {...this.state.filter, priceFromValue: e.target.value}});
    }



    changePriceSelectBefore = (e) => {
        if (!isNaN(e.target.value))
            this.setState({filter: {...this.state.filter, priceBeforeValue: e.target.value}})
    }
    changeAreaFrom = (e) =>{
        if (!isNaN(e.target.value))
            this.setState({filter: {...this.state.filter, areaFromValue: e.target.value}})
    }

    changeAreaBefore = (e) =>{
        if (!isNaN(e.target.value))
            this.setState({filter: {...this.state.filter, areaBeforeValue: e.target.value}});
    }

    btnFind = () => {
       this.props.getData(this.state.filter);
    }

    render () {
     return (
         <div className="filter">
            <div className="searchForm">
             <Form>
                 <Row>
                     <Col className="searchElement">
                         <Form.Label htmlFor="disabledTextInput">Комплекс</Form.Label>
                         <Form.Select id="numberOfRooms" aria-label="Комплекс" onChange={this.changeComplexSelect}>
                             {this.state.complexList.map(item => {
                                 return (
                                     <option key={item.id} value={item.id}>{item.nameComplex}</option>
                                 )
                             })}
                         </Form.Select>
                     </Col>
                     <Col>
                         <Form.Label htmlFor="disabledTextInput">Застройщик</Form.Label>
                         <Form.Select id="numberOfRooms" aria-label="Default select example" onChange={this.changeDeveloperSelect}>
                             {this.state.developerList.map(item => {
                                 return (
                                     <option key={item.id} value={item.id}>{item.nameDeveloper}</option>
                                 )
                             })}
                         </Form.Select>
                     </Col>
                 </Row>

                 <Row>
                     <Col className="searchElement">
                         <Form.Label htmlFor="disabledTextInput">Площадь от</Form.Label>
                         <Form.Control id="disabledTextInput" onChange={this.changeAreaFrom}/>
                     </Col>
                     <Col className="searchElement">
                         <Form.Label htmlFor="disabledTextInput">Площадь до</Form.Label>
                         <Form.Control id="disabledTextInput" onChange={this.changeAreaBefore}/>
                     </Col>

                     <Col className="searchElement">
                         <Form.Label htmlFor="disabledTextInput">Цена от</Form.Label>
                         <Form.Control id="disabledTextInput" onChange={this.changePriceSelectFrom}/>
                     </Col>
                     <Col className="searchElement">
                         <Form.Label htmlFor="disabledTextInput">Цена до</Form.Label>
                         <Form.Control id="disabledTextInput" onChange={this.changePriceSelectBefore}/>
                     </Col>
                 </Row>
                 <div className="btnSearch">
                    <Button variant="secondary" onClick={this.btnFind}>Найти</Button>
                 </div>
            </Form>
            </div>
         </div>
     );
    }
}
export default Filter;