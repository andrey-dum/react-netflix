import React from 'react';

import './index.css';



const Navbar = () => {
    const [blackNav, setBlackNav] = React.useState(false);
    
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBlackNav(true)
            } else setBlackNav(false)
        })
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])


    return (
        <div className={`nav ${blackNav && 'nav__black'}`}>
            <div className="nav__contents">
                <img className="nav__logo" src={'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'} alt="Netflix Logo" />
                <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix Logo" />
            </div>
        </div>
    );
}

export default Navbar;
