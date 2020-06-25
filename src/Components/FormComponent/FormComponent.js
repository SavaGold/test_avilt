import React, { Component } from 'react'
import './../../Components/CostComponent/CostComponent.css'
import ThanksComponent from '../ThanksComponent/ThanksComponent';


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { valuename: '', valuephone: '', valuenumber: '' };
        this.state = { showPopup: false };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeNumber(event) {
        this.setState({ valuenumber: event.target.value });
    }
    handleChangeName(event) {
        this.setState({ valuename: event.target.value });
    }
    handleChangePhone(event) {
        this.setState({ valuephone: event.target.value });
    }

    handleSubmit(event) {
        alert(
            'Спасибо, Ваша заявка принята\n' +
            'Отправленное имя: ' + this.state.valuename + ',\n' +
            'Телефон: ' + this.state.valuephone + ',\n' +
            'Номер: ' + this.state.valuenumber
        );
        event.preventDefault();
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='popup'>
                <div className='form-container'>
                    <div className='form-send'>
                        <p id='title'>Заявка</p>
                        <img onClick={this.props.closePopup} src={require('./../../images/close-dark.png')} alt='close' className='close' />
                        <form className='input-form' onSubmit={this.handleSubmit}>

                            <input id='input-name' type="text" placeholder='Имя' value={this.state.valuename} onChange={this.handleChangeName} />
                            <input id='input-phone' type="text" placeholder='Телефон' value={this.state.valuephone} onChange={this.handleChangePhone} />
                            <input id='input-number' type="text" placeholder='Ваши номера' value={this.state.valuenumber} onChange={this.handleChangeNumber} />
                            <input onClick={this.togglePopup.bind(this)} id='send' type="submit" value="Заказать" />
                        </form>
                    </div>
                </div>
                {this.state.showPopup ? <ThanksComponent closePopup={this.togglePopup.bind(this)}/>    : null
                }
            </div>

        )
    }
}
export default FormComponent;