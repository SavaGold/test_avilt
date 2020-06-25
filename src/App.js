import React, { Component } from 'react';
import CostComponent from './Components/CostComponent/CostComponent';
import ReviewsComponent from './Components/ReviewsComponent/ReviewsComponent';
import './App.css';
import AdvantagesComponent from './Components/AdvantagesComponent/AdvantagesComponent'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import ScrollableAnchor from 'react-scrollable-anchor';
import ThanksComponent from './Components/ThanksComponent/ThanksComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { valuename: '', valuephone: '', valuenumber: '' };

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
  render() {
    return (
      <div className='main-navigation'>
        <div className="App">
{/* <ThanksComponent/> */}
          <div className='header'>
            <HeaderComponent />
          </div>

          <ScrollableAnchor id={'main'}>
            <div className='first-block'>
              <div id='left'>
                <div className='navigation'>
                  <a href='#main'><button type='button' className='nav-button'> Главная</button> </a>
                  <a href='#advantage'><button type='button' className='nav-button'> Преимущества </button> </a>
                  <a href='#cost'><button type='button' className='nav-button'>Стоимость</button>  </a>
                  <a href='#review'><button type='button' className='nav-button'> Отзывы</button> </a>
                </div>
                <div className='head-title'>
                  <span>Lorem ipsum</span> dolor sit amet, consecte-tur adipiscing
            </div>
                <div className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, massa ac felis, pulvinar iaculis est est non leo. Quisque
            </div>
              </div>
              <div id='right'>
                <div className='form'>
                  <form className='form-input' onSubmit={this.handleSubmit}>
                    <p>Ваше имя</p>
                    <input id='input-name' type="text" placeholder='Имя' value={this.state.valuename} onChange={this.handleChangeName} />
                    <p>Телефон</p>
                    <input id='input-phone' type="text" placeholder='Телефон' value={this.state.valuephone} onChange={this.handleChangePhone} />
                    <p>Ваши номера</p>
                    <input id='input-number' type="text" placeholder='Ваши номера' value={this.state.valuenumber} onChange={this.handleChangeNumber} />
                    <input id='send' type="submit" value="Заказать" />
                  </form>
                </div>
              </div>
            </div>
          </ScrollableAnchor>

          <ScrollableAnchor id='advantage'>
            <div className='advantages'>
              <AdvantagesComponent />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id='cost'>
            <div className='cost'>
              <CostComponent />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id='review'>
            <div className='carousel'>
              <ReviewsComponent />
            </div>
          </ScrollableAnchor>

          <div className='footer-block'>
            <div className='logo'>
              <img src={require('./images/nomer-logo.png')} alt='number-logo' />
            </div>
            <div className='go-to-up'>
              <a href='#main'>Наверх
              <img id='arrow' src={require('./images/arrowsoutline.png')} alt='arrow' />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
