import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <img src={require('./image/logo.png')} alt="Logo" className="log" id="log" />
            <p className='title-p'>copyright &copy; ABDELALI BAKKA.</p>
            <span>All rights reserved.</span>
        </footer>
    );
}

export default Footer;
