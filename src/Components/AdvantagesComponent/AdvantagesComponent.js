import React, { Component } from 'react'
import './AdvantagesComponent.css'


class AdvantagesComponent extends Component {
    render() {
        return (

            <div className='advantage-block'>
                <div className='title'>
                    <h3>Преимущества</h3>
                </div>
                <div className='container-block'>
                    <div className='car-container'>
                        <img id='number' src={require('./../../images/number.png')} alt='number' />
                        <div id='rectangle-car'></div>
                    </div>
                    <div className='info-block'>
                        <div className='info-point'>
                            <div className='time-square'>
                                <img src={require('./../../images/times-square.png')} alt='icon' />
                                <div>
                                    <h3>Lorem Ipsum</h3>
                                    <div className='rectangle-info'></div>
                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis</p>
                        </div>
                        <div className='info-point'>
                            <div className='document'>
                                <img src={require('./../../images/document.png')} alt='icon' />
                                <div>
                                    <h3>Lorem Ipsum</h3>
                                    <div className='rectangle-info'></div>
                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>
                        </div>
                        <div className='info-point'>
                            <div className='business'>
                                <img src={require('./../../images/business.png')} alt='icon' />
                                <div>
                                    <h3>Lorem Ipsum</h3>
                                    <div className='rectangle-info'></div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi</p>
                        </div>
                    </div>
                </div>
            </div>





            // <div className='block'>
            //     <div className='advantage-container'>
            //         <h2>Преимущества</h2>
            //         <div className='car-container'>
            //             <div className='car'>
            //                 <img id='number' src={require('./../../images/number.png')} alt='number' />
            //                 <div className='rectangle-car'></div>
            //             </div>
            //         </div>
            //         <div className='info-block'>
            //             <div className='time-square'>
            //                 <img src={require('./../../images/times-square.png')} alt='icon' />
            //                 <h3>Lorem Ipsum</h3>
            //                 </div>
            //                 <div className='rectangle'></div>
            //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis</p>

            //             <div className='document'>
            //                 <img src={require('./../../images/document.png')} alt='icon' />
            //                 <h3>Lorem Ipsum</h3>
            //                 </div>
            //                 <div className='rectangle'></div>
            //                 <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>

            //             <div className='business'>
            //                 <img src={require('./../../images/business.png')} alt='icon' />
            //                 <h3>Lorem Ipsum</h3>
            //                 </div>
            //                 <div className='rectangle'></div>
            //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi</p>     
            //         </div>
            //     </div>
            // </div>
        )
    }
}
export default AdvantagesComponent;