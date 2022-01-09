import React from "react";
import Item from "../components/item/Item";
import {mockData} from "../helpers/data";
import Filter from "../components/filter/Filter";

class ItemBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            listItems: []
        }
    }
    componentDidMount() {
        let dataItem = localStorage.getItem('data');
        if (dataItem != null) {
            this.setState({listItems: JSON.parse(dataItem)})
        }
        else    {
            this.setState({listItems: mockData});
            localStorage.setItem('data', JSON.stringify(mockData));
        }
    }

    getData = (filter) =>   {
        if (Object.keys(filter).length === 0) { //проверил на пустой объект
            let listData = localStorage.getItem('data');
            if (listData != null) {
                this.setState({listItems: JSON.parse(listData)})
            }
        }
        else {
            let newArray = localStorage.getItem('data');
            if (newArray != null) {
                let mas = JSON.parse(newArray);
                let result = mas.filter(function (itemEl) {
                    let condition = true;
                    if (filter.complexValue != null)
                        condition = itemEl.complex.id === Number(filter.complexValue);
                    if (filter.developerValue != null)
                        condition = condition && itemEl.developer.id === Number(filter.developerValue);
                    if (filter.priceFromValue != null && filter.priceBeforeValue != null)
                        condition = condition && itemEl.price >= Number(filter.priceFromValue)  && itemEl.price <= Number(filter.priceBeforeValue)
                    if (filter.areaFromValue != null && filter.areaBeforeValue != null) {
                        condition = condition && itemEl.area >= Number(filter.areaFromValue)  && itemEl.area <= Number(filter.areaBeforeValue)
                    }
                    return condition
                })
                this.setState({listItems: result});
            }
        }
    }

    render () {
        return (
            <div>
                <Filter getData={this.getData} />
                <div className="itemBlock">
                    {this.state.listItems.map(item => {
                        return (
                            <Item key={item.id} data={item}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default ItemBlock;