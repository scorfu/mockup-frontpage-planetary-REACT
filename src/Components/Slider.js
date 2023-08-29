import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import 'bootstrap/dist/css/bootstrap.css';
import './Slider.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../cartSlice/cart';

const Slider = () => {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const text = [
        {
            title: 'Enceladus',
            where: 'The Saturn System',
            distance: 'Distance: 9.5',
            population: 'AUPopulation: 3920'
        },
        {
            title: 'Titan',
            where: 'Around Saturn System',
            distance: 'Distance: ~5.9',
            population: 'AUPopulation: 0239'
        },
        {
            title: 'EnceladusDark',
            where: 'The Saturn System ',
            distance: 'Distance: ~9.5',
            population: 'AUPopulation: ???'
        },
    ];
    const addToCartHandler = (e) => {
        switch (e.target.className.split(' ')[1]) {
            case 'enceladus': dispatch(addItemToCart({ name: 'Enceladus', price: 999.990, id: Math.ceil(Math.random()*1000) }));
                break;
            case 'titan': dispatch(addItemToCart({ name: 'Titan', price: 999.990, id: Math.ceil(Math.random()*1000) }));
                break;
            case 'enceladusdark': dispatch(addItemToCart({ name: 'EnceladusDark', price: 666.660, id: Math.ceil(Math.random()*1000)}));
        }
    }

    return (
        <>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='carousel__item'>
                    <CarouselImage text={text[0]} />
                    <Carousel.Caption>
                        <div className='text__nextTo__img'>
                            <div className='description__container'>
                                <p className='title__nextTo__img'>Enceladus</p>
                                <p>is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.</p>
                                <p>Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.</p>
                            </div>
                            <div className='purchase__container'>
                                <div className='purchase__info'>
                                    <p className='price'>999.990 €</p>
                                    <p className='priceFor'>one way ticket</p>
                                </div>
                                <div>
                                    <button className='purchase__btn enceladus' onClick={addToCartHandler}>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel__item'>
                    <CarouselImage text={text[1]} />
                    <Carousel.Caption>
                        <div className='text__nextTo__img'>
                            <div className='description__container'>
                                <p className='title__nextTo__img'>Titan</p>
                                <p>is the largest moon of Saturn. It is HUGE!</p>
                                <p>Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.</p>
                            </div>
                            <div className='purchase__container'>
                                <div className='purchase__info'>
                                    <p className='price'>999.990 €</p>
                                    <p className='priceFor'>one way ticket</p>
                                </div>
                                <div>
                                    <button className='purchase__btn titan' onClick={addToCartHandler}>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel__item'>
                    <CarouselImage text={text[2]} />
                    <Carousel.Caption>
                        <div className='text__nextTo__img'>
                            <div className='description__container'>
                                <p className='title__nextTo__img'>EnceladusDark</p>
                                <p>is the darkest moon of Saturn. It is for the brake ones.</p>
                                <p>Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.</p>
                            </div>
                            <div className='purchase__container'>
                                <div className='purchase__info'>
                                    <p className='price'>666.660 €</p>
                                    <p className='priceFor'>one way ticket</p>
                                </div>
                                <div>
                                    <button className='purchase__btn enceladusdark' onClick={addToCartHandler}>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider;












