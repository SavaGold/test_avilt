import React, { Component } from 'react'
import './HeaderComponent.css'
import FormComponent from '../FormComponent/FormComponent.js';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='header-block'>
                <div className='logo-left'>
                <a href='/'> <img src={require('./../../images/Logo.png')} alt='company-logo' /></a>
                </div>
                <div className='right-contacts'>
                    <div className='contact-us'>
                        <a href='/'>+38(099) 999 99 99</a>
                        <button id='order-call' onClick={this.togglePopup.bind(this)}>Заказать</button>
                    </div>
                    {this.state.showPopup ?
                        <FormComponent
                            text='Click "Close Button" to hide popup'
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div>

            </div>
        )
    }
}
export default HeaderComponent;