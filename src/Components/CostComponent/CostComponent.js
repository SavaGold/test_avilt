import React, { Component } from 'react'
import './CostComponent.css'
import FormComponent from './../FormComponent/FormComponent.js'


class CostComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
        this.state = {
            INFO: [
                {
                    id: 0,
                    title: 'Lorem Ipsum',
                    point1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    point2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    point3: 'Lorem ipsum dolor sit amet, consectetur',
                    oldPrice: '399',
                    newPrice: '299',
                },
                {
                    id: 1,
                    title: 'Lorem Ipsum',
                    point1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    point2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    point3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    oldPrice: '599',
                    newPrice: '499',
                }
            ],
        }
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='cost-block'>
                <div className='title'>
                    <h2>Стоимость</h2>
                </div>
                <div className='list'>
                    {this.state.INFO.map((item, index) => {
                        return (
                            <div key={index} className='list-of-items'>
                                <div className='title-name'>{item.title}</div>
                                <div className='points'>
                                    <img id='list-style' alt='list-style' src={require('./../../images/interface-2.png')} />
                                    <p id='point'>{item.point1}</p>
                                </div>
                                <div className='points'>
                                    <img id='list-style' alt='list-style' src={require('./../../images/interface-2.png')} />
                                    <p id='point'>{item.point2}</p>
                                </div>
                                <div className='points'>
                                    <img id='list-style' alt='list-style' src={require('./../../images/interface-2.png')} />
                                    <p id='point'>{item.point3}</p>
                                </div>
                                <div className='rectangle'></div>
                                <p id='old-price'>{item.oldPrice}</p>
                                <p id='new-price'>{item.newPrice}</p>
                                <div className='order'>
                                    <button id='button-order' onClick={this.togglePopup.bind(this)} type='button'>Заказать</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {this.state.showPopup ?
                    <FormComponent
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div >
        )
    }
}
export default CostComponent;