import arrowImg from '../assets/arrow.png';
import briefcaseImg from '../assets/pack.png';
import flyImg from '../assets/fly.png'
import liveImg from '../assets/live.png';
import './LogoMotto.css';

const LogoMotto = () =>{
    return (
        <>
        <section className="logos">
            <div>
                <img src={briefcaseImg} alt="briefcase"/>
                <p className="logo__description">pack</p>
            </div>
            <img src={arrowImg} alt="arrow"/>
            <div>
                <img src={flyImg} alt="rocket" />
                <p className="logo__description">fly</p>
            </div>
            <img src={arrowImg} alt="arrow"/>
            <div>
                <img src={liveImg} alt="leaves" />
                <p className="logo__description">live</p>
            </div>
            <img src={arrowImg} alt="arrow"/>
            <div className="text__logos">
                <p>ENJOY</p>
                <p>A NEW WORLD!</p>
            </div>
            </section>
        </>
    )
}

export default LogoMotto