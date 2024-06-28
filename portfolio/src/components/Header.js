import React from 'react';

function Header() {
    const handleLogoClick = (e) => {
        e.preventDefault();
        window.location.reload();
    };

    return (
        <header>
            <a href="#" className="logo" id="log" onClick={handleLogoClick}>
                <img src={require('./image/logo.png')} alt="Logo" className="log" id="log" />
            </a>
            <nav className="list">
                <a href="#OurServices">Our Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </header>
    );
}

export default Header;
