import React from 'react';

import instagram from '../../assets/images/instagramLogoBlack.jpg';
import linkedIn from '../../assets/images/linkedInLogoWhite.png';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div className="social-media">
                <a href="" target="_blank"><img className="social-logo" src={linkedIn} alt="linkedIn logo" /></a>
                <a href="" target="_blank"><img className="social-logo instagram-logo" src={instagram} alt="instagram logo" /></a>
            </div>
        </div>
    )
}

export default Footer;