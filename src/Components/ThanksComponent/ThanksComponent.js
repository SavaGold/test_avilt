import React, { Component } from 'react'
import './ThanksComponent.css'


class ThanksComponent extends Component {
    render() {
        return (
            <div className='thanks-block'>
                <div className='thanks-container'>
                    <div className='tick'>
                        <div className='circle'>
                            <img src={require('./../../images/tick.png')} alt='tick' />
                        </div>
                    </div>
                    <img onClick={this.props.closePopup} src={require('./../../images/close-dark.png')} alt='close' className='close' />
                    <div className='thanks-words'>
                        <div id='congrats'>
                            <p>Спасибо за заявку!</p>
                        </div>
                        <div id='congrats-2'>
                            <p>Наш менеджер свяжется с вами позже</p>
                        </div>
                    </div>

                    <div className='social'>
                        <div className='fb'>
                            <a href='https://www.facebook.com/'>
                                <button id='social' type='button'>
                                    <img alt='facebook' src={require('./../../images/facebook.png')} />
                                </button></a>
                        </div>
                        <div className='inst'>
                        <a href='https://www.instagram.com/'>
                            <button id='social' type='button'>
                                <img alt='instagram' src={require('./../../images/instagram.png')} />
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ThanksComponent;