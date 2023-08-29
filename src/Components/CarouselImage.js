import sliderPlanetImage from '../assets/sliderPlanet.png';
import './CarouselImage.css';

const CarouselImage = ({ text }) => {

  return (
    <div className='container__text__over__sliderImage'>
      <div className='text__over__sliderImage'>
        <p className='title__over'>{text.title}</p>
        <div className='text__over'>
          <p>{text.where}</p>
          <p>{text.distance}</p>
          <p>{text.population}</p>
        </div>
      </div>
      <img src={sliderPlanetImage} alt={text} className='sliderImage'/>
    </div>
  );
};

export default CarouselImage;
