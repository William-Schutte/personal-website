import gsap from 'gsap';
import { useEffect } from 'react';

function Header(props) {
    

    useEffect(() => {
        gsap.from('.header__name', {duration: 1, delay: .6, x: -1000, ease: "power2.out"});
        gsap.from('.header__sub', {duration: 1, delay: .4, x: -1000, ease: "power2.out"});
        // 
    }, []);

    function handleClick() {
        // let t1 = gsap.timeline();
        // t1.to('.header__btn', {duration: 1, rotate: 1200,});
        // t1.to('.header__btn', {duration: 2, y: -1000, ease: "power2.out"});
        props.handleClick();
    }

    return (
        <header className="header">
            <div className="header__bg-gradient">
                <div className="header__row">
                    <div className="header__text">
                        <h1 className="header__name">William Schutte</h1>
                        <h2 className="header__sub">Full Stack Web Developer</h2>
                    </div>
                    <button className="header__btn svg-shadow" onClick={handleClick} />
                </div>
            </div>
        </header>
    );
}

export default Header