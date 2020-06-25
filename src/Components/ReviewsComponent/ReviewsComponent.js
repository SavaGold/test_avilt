import React, { Component } from 'react'
import img1 from './../../images/review.png'
import img2 from './../../images/review.png'
import img3 from './../../images/review.png'
import img4 from './../../images/review.png'
import './ReviewsComponent.css'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class ReviewsComponent extends Component {
    render() {
        return (
            <div className='review-block'>
                <div className='title'>
                    <h3>Отзывы</h3>
                </div>
            <div className='slider-container'> 
                <Carousel slidesPerPage={3} arrows infinite>
                    <img alt='review1' src={img1} />
                    <img alt='review2' src={img2} />
                    <img alt='review3' src={img3} />
                    <img alt='review4' src={img4} />
                </Carousel>
            </div>
            <div className='slider-container-2'> 
                <Carousel slidesPerPage={2} arrows infinite>
                    <img alt='review1' src={img1} />
                    <img alt='review2' src={img2} />
                    <img alt='review3' src={img3} />
                    <img alt='review4' src={img4} />
                </Carousel>
            </div>
            <div className='slider-container-3'> 
                <Carousel slidesPerPage={1} arrows infinite>
                    <img alt='review1' src={img1} />
                    <img alt='review2' src={img2} />
                    <img alt='review3' src={img3} />
                    <img alt='review4' src={img4} />
                </Carousel>
            </div>
            </div>
        );
    }
}


export default ReviewsComponent;