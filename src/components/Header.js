import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Header(props) {
    useEffect(() => {
        Aos.init({})
    }, []);

    function handleClick() {
        props.handleClick();
    }

    return (
        <header className="header">
            <div className="header__bg-gradient">
                <div className="header__row">
                    <div className="header__text">
                        <h1 className="header__name"
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-duration="1400">William Schutte</h1>
                        <h2 className="header__sub"
                            data-aos="fade-down"
                            data-aos-delay="100"
                            data-aos-duration="1400">Full Stack Web Developer</h2>
                        <h2 className="header__sub"
                            data-aos="fade-down"
                            data-aos-delay="0"
                            data-aos-duration="1400">B.S. Engineering</h2>
                    </div>
                    <div className="header__btn_div" 
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1000">
                        <button className="header__btn svg-shadow" onClick={handleClick} />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header