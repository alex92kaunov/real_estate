import React from "react";
import {Modal, Container, Button, Row, Col, Form} from "react-bootstrap";
import './ModalForm.css'

class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //-----------------Блок функций сохраняюх значения измененных полей-------------------------------------
    onChangeComplexForm = (e) => {
        let complex = {...this.props.changeItem.complex, nameComplex: e.target.value};
        this.props.setParentState({item: {...this.props.changeItem, complex: complex}});
    }
    onChangeDeveloperForm = (e) =>  {
        let developer = {...this.props.changeItem.developer, nameDeveloper: e.target.value};
        this.props.setParentState({item: {...this.props.changeItem, developer: developer}});
    }
    onChangeAddressForm = (e) =>    {
        this.props.setParentState({item: {...this.props.changeItem, address: e.target.value}});
    }
    onChangeRoomsForm = (e) =>    {
        this.props.setParentState({item: {...this.props.changeItem, rooms: e.target.value}});
    }
    onChangeAreaForm = (e) =>    {
        this.props.setParentState({item: {...this.props.changeItem, area: e.target.value}});
    }
    onChangeTypeForm = (e) =>   {
        this.props.setParentState({item: {...this.props.changeItem, type: e.target.value}});
    }
    onChangeDealForm = (e) =>   {
        this.props.setParentState({item: {...this.props.changeItem, deal: e.target.value}});
    }
    onChangeHistoryForm = (e) => {
        this.props.setParentState({item: {...this.props.changeItem, history: e.target.value}});
    }
    onChangePriceForm = (e) =>  {
        this.props.setParentState({item: {...this.props.changeItem, price: e.target.value}});
    }
    onChangeTeleForm = (e) =>  {
        this.props.setParentState({item: {...this.props.changeItem, tele: e.target.value}});
    }
    onChangeSpecificationForm = (e) =>  {
        this.props.setParentState({item: {...this.props.changeItem, specification: e.target.value}});
    }
    //------------------------------------------------------------------------------------------------------
    save = () => {
        let idElement = this.props.changeItem.id
        this.props.saveElement(idElement)
    }

    render () {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Создание/изменение элемента</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Комплекс:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput"
                                              value={this.props.changeItem.complex? this.props.changeItem.complex.nameComplex : ''}
                                              onChange={this.onChangeComplexForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Застройщик:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.developer ? this.props.changeItem.developer.nameDeveloper : ''}
                                              onChange={this.onChangeDeveloperForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Адрес:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.address ? this.props.changeItem.address : ''}
                                              onChange={this.onChangeAddressForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Количество комнат:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.rooms ? this.props.changeItem.rooms : ''}
                                              onChange={this.onChangeRoomsForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Площадь:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.area ? this.props.changeItem.area : ''}
                                              onChange={this.onChangeAreaForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Тип:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.type ? this.props.changeItem.type : ''}
                                              onChange={this.onChangeTypeForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Вид сделки:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.deal ? this.props.changeItem.deal : ''}
                                              onChange={this.onChangeDealForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Новое или вторичка:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.history ? this.props.changeItem.history : ''}
                                              onChange={this.onChangeHistoryForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Цена:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.price ? this.props.changeItem.price : ''}
                                              onChange={this.onChangePriceForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Телефон:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.tele ? this.props.changeItem.tele : ''}
                                              onChange={this.onChangeTeleForm}/>
                            </Col>
                        </Row>
                        <Row className="rowFormStyle">
                            <Col xs={8} md={4}>
                                <h6>Описание:</h6>
                            </Col>
                            <Col>
                                <Form.Control id="disabledTextInput" value={this.props.changeItem.specification ? this.props.changeItem.specification : ''}
                                              onChange={this.onChangeSpecificationForm}/>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.save}>Сохранить</Button>
                    <Button onClick={this.props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ModalForm;



// <Form.Select aria-label="Default select example" value={this.props.changeItem.type} onChange={this.onChangeTypeForm}>
//     <option value={this.props.changeItem.type}>Новое</option>
//     <option value={this.props.changeItem.type}>Вторичка</option>
// </Form.Select>
